// Category module extracted from index.html.

(function(){
  var _originalRenderExamPage = renderExamPage;

  function root(){ return document.getElementById('pageRoot'); }
  function back(label, action){ return '<button class="cid-back" type="button" data-cun-back onclick="'+action+'" style="margin-top:22px;">← Back to '+label+'</button>'; }
  function chipList(items){ return '<div class="ca-topic-chips">' + items.map(function(t){ return '<span class="ca-topic-chip">'+t+'</span>'; }).join('') + '</div>'; }

  function subjectsMapFor(examId){ return examId === 'csirnet' ? CSIR_SUBJECTS : UGC_SUBJECTS; }
  function cutoffsFor(examId){ return examId === 'csirnet' ? CSIR_CUTOFFS : UGC_CUTOFFS; }

  window.cunRender = function(examId, view){
    var r = root();
    if(!r) return;
    r.style.display = 'block';
    if(view === 'examdetails') r.innerHTML = examDetailsPage(examId);
    else if(view === 'subjects') r.innerHTML = subjectsListPage(examId);
    else if(view && view.indexOf('subject:') === 0) r.innerHTML = subjectDetailPage(examId, view.slice(8));
    else if(view === 'allcutoffs'){ r.innerHTML = allCutoffsPage(examId); bindAllCutoffControls(); return; }
    else if(view === 'selectionratio') r.innerHTML = selectionRatioPage(examId);
    else if(view === 'results'){
      renderResults({exam:examId});
      var backBtn = document.createElement('button');
      backBtn.className = 'cid-back'; backBtn.type = 'button';
      backBtn.style.cssText = 'margin-bottom:18px;display:block;';
      backBtn.textContent = '← Back to '+EXAMS[examId].shortName+' Overview';
      backBtn.onclick = function(){ window.cunRender(examId,'overview'); if(window.cidSetSidebarActive) window.cidSetSidebarActive('overview'); };
      r.insertBefore(backBtn, r.firstChild);
      return;
    }
    else r.innerHTML = catOverview(examId);
    bindCun(r, examId);
  };

  function catOverview(examId){
    var exam = EXAMS[examId];
    var cards = [
      { key:'examdetails', icon:'📋', title:'Exam Details', desc:'Conducting body, pattern, marking scheme and eligibility age limits.' },
      { key:'subjects', icon:'📚', title:'Subjects', desc:exam.subjects.length+' subjects \u2014 tap any one for topics, cutoff trend, pattern and career.' }
    ];
    if(examId === 'csirnet'){
      cards.push({ key:'allcutoffs', icon:'📊', title:'Cutoff Trend (All Subjects)', desc:'Pick a year, track and category \u2014 see every subject\u2019s cutoff side by side.' });
      cards.push({ key:'selectionratio', icon:'🎯', title:'Selection Ratio', desc:'How many appeared vs qualified, session by session.' });
      cards.push({ key:'results', icon:'🏆', title:'PW Results', desc:'PW topper ranks, subject-wise and year-wise.' });
    }
    var cardsHTML = cards.map(function(c){
      return '<button class="upsc-module" type="button" onclick="cunRender(\''+examId+'\',\''+c.key+'\')"><div class="i">'+c.icon+'</div><h3>'+c.title+'</h3><p>'+c.desc+'</p></button>';
    }).join('');
    return `
      <section class="upsc-section" style="margin-top:28px;">
        <div class="cid-kicker">${exam.shortName} INTELLIGENCE</div>
        <h1 style="margin:8px 0 8px;">${exam.fullName}</h1>
        <p class="sub">${exam.purpose}</p>
        <div class="upsc-grid" style="margin-top:22px;">${cardsHTML}</div>
      </section>`;
  }

  function bindAllCutoffControls(){
    var yearSel = document.getElementById('csirAllYear');
    var trackSel = document.getElementById('csirAllTrack');
    var catSel = document.getElementById('csirAllCat');
    if(!yearSel) return;
    function refresh(){
      var year = yearSel.value, track = trackSel.value, cat = catSel.value;
      var rows = ['Chemical Sciences','Earth Sciences','Life Sciences','Mathematical Sciences','Physical Sciences'].map(function(subj){
        var rec = CSIR_CUTOFFS.find(function(c){ return c.subject === subj && c.session === year && c.track === track; });
        var cell = rec ? csirCutoffCellHTML(rec, cat) : '\u2014';
        return '<tr><td><b>'+subj+'</b></td><td>'+cell+'</td></tr>';
      }).join('');
      document.getElementById('csirAllCutoffWrap').innerHTML =
        '<table class="mba-cutoff-table"><thead><tr><th>Subject</th><th>'+cat+' Cutoff (%/percentile + approx marks /200)</th></tr></thead><tbody>'+rows+'</tbody></table>';
    }
    yearSel.onchange = refresh; trackSel.onchange = refresh; catSel.onchange = refresh;
    refresh();
  }

  function allCutoffsPage(examId){
    var exam = EXAMS[examId];
    var years = ['June 2024','Dec 2025'];
    var tracks = ['JRF','Assistant Professor / LS','PhD Only'];
    var cats = ['UR','EWS','OBC','SC','ST','PwD'];
    var yearOpts = years.map(function(y){ return '<option value="'+y+'">'+y+'</option>'; }).join('');
    var trackOpts = tracks.map(function(t){ return '<option value="'+t+'">'+t+'</option>'; }).join('');
    var catOpts = cats.map(function(c){ return '<option value="'+c+'">'+c+'</option>'; }).join('');
    return back(exam.shortName+' Overview', "cunRender('"+examId+"','overview')") + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">${exam.shortName}</div>
        <h2>📊 Cutoff Trend \u2014 All Subjects</h2>
        <p class="sub">Pick a year, track and category to compare every subject's cutoff at a glance.</p>
        <div class="exam-fact-row">
          <div class="df-field"><label>Year</label><select id="csirAllYear">${yearOpts}</select></div>
          <div class="df-field"><label>Track</label><select id="csirAllTrack">${trackOpts}</select></div>
          <div class="df-field"><label>Category</label><select id="csirAllCat">${catOpts}</select></div>
        </div>
        <div id="csirAllCutoffWrap" style="margin-top:16px;overflow:auto;"></div>
        <div class="ca-step-note" style="margin-top:10px;">Each cell shows the official %/percentile first, with approximate marks out of 200 just below it. Life Sciences is scored as an NTA percentile (large applicant pool) so its marks figure is an approximate range, not exact. Source: CSIR HRDG official releases.</div>
      </section>`;
  }

  var CSIR_SELECTION_DATA = [
    ['June 2023','2,74,027','1,99,890','8,570 (JRF+LS)','~4.3%'],
    ['Dec 2023','2,19,146','1,75,355','6,901 (JRF+LS)','~3.9%'],
    ['June 2024','2,25,335','1,63,529','6,539 (JRF+LS)','~4.0%'],
    ['June 2025','\u2014','~1,47,000','13,102 (Cat 1+2+3 combined)','~8.9%']
  ];

  function selectionRatioPage(examId){
    var exam = EXAMS[examId];
    var rows = CSIR_SELECTION_DATA.map(function(r){
      return '<tr><td><b>'+r[0]+'</b></td><td>'+r[1]+'</td><td>'+r[2]+'</td><td><span class="mba-cutoff-badge">'+r[3]+'</span></td><td>'+r[4]+'</td></tr>';
    }).join('');
    return back(exam.shortName+' Overview', "cunRender('"+examId+"','overview')") + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">${exam.shortName}</div>
        <h2>🎯 Selection Ratio</h2>
        <p class="sub">How many candidates appeared each session, and how many actually qualified.</p>
        <div style="overflow:auto;">
        <table class="mba-cutoff-table">
          <thead><tr><th>Session</th><th>Registered</th><th>Appeared</th><th>Qualified</th><th>Qualifying %</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
        </div>
        <div class="ca-step-note" style="margin-top:10px;">From June 2025 onward, CSIR reports qualification across 3 categories (Cat 1: JRF+Assistant Professor eligible; Cat 2: Assistant Professor+PhD eligible; Cat 3: PhD-only eligible) instead of the older JRF/LS split \u2014 so qualifying % isn't perfectly comparable across the two reporting eras. Source: Official CSIR-HRDG/NTA result releases.</div>
      </section>`;
  }

  function examDetailsPage(examId){
    var exam = EXAMS[examId];
    return back(exam.shortName+' Overview', "cunRender('"+examId+"','overview')") + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">${exam.shortName}</div>
        <h2>📋 Exam Details</h2>
        <div class="exam-fact-row">
          <div class="exam-fact"><span class="exam-fact-label">Conducting Body</span><span class="exam-fact-value">${exam.conductingBody}</span></div>
          <div class="exam-fact"><span class="exam-fact-label">Frequency</span><span class="exam-fact-value">${exam.frequency}</span></div>
          <div class="exam-fact"><span class="exam-fact-label">Duration</span><span class="exam-fact-value">${exam.duration}</span></div>
        </div>
        <div class="exam-block-label">Exam Pattern</div>
        <div class="ca-step-card">${exam.pattern}</div>
        <div class="exam-block-label">Marking Scheme</div>
        <div class="ca-step-card"><span class="exam-marking-badge">${exam.marking}</span></div>
        <div class="exam-block-label">Qualifying Benchmark</div>
        <div class="ca-step-card">${exam.qualifyingBenchmark}</div>
        <div class="exam-block-label">Age Limit</div>
        <div class="ca-step-card">${exam.ageLimit}</div>
        <div class="exam-block-label">Career Pathway</div>
        <div class="ca-step-card">${chipList(exam.careerPaths)}</div>
      </section>`;
  }

  function subjectsListPage(examId){
    var exam = EXAMS[examId];
    var subjectsMap = subjectsMapFor(examId);
    var cards = exam.subjects.map(function(sid){
      var s = subjectsMap[sid];
      return '<button type="button" class="exam-icon-card" onclick="cunRender(\''+examId+'\',\'subject:'+sid+'\')">'+
        '<span class="exam-icon">📖</span>'+
        '<b>'+s.name+'</b>'+
        '<span>'+s.code+'</span>'+
        '<em>Explore →</em>'+
      '</button>';
    }).join('');
    return back(exam.shortName+' Overview', "cunRender('"+examId+"','overview')") + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">${exam.shortName}</div>
        <h2>📚 Subjects</h2>
        <p class="sub">Tap any subject for its topics, paper pattern, cutoff trend and career relevance.</p>
        <div class="exam-icon-grid" style="margin-top:22px;">${cards}</div>
      </section>`;
  }

  function csirCutoffCellHTML(rec, cat){
    if(rec[cat] === undefined) return '\u2014';
    var val = rec[cat];
    if(rec.unit === 'percentile'){
      var approx = rec.approxMarks && rec.approxMarks[cat] ? rec.approxMarks[cat] : null;
      return '<span class="mba-cutoff-badge">'+val+' pct</span><div class="ca-dim" style="margin-top:3px;font-size:11px;">'+(approx ? '~'+approx+' / 200' : 'marks n/a')+'</div>';
    }
    var marks = (val/100*200).toFixed(1).replace(/\.0$/,'');
    return '<span class="mba-cutoff-badge">'+val+'%</span><div class="ca-dim" style="margin-top:3px;font-size:11px;">~'+marks+' / 200</div>';
  }

  function cutoffTrendTable(examId, subjectName){
    var records = cutoffsFor(examId).filter(function(c){ return c.subject === subjectName; });
    if(!records.length){
      return '<div class="ca-step-note">No verified cutoff data on file yet for this subject \u2014 check the latest official NTA/CSIR-HRDG release.</div>';
    }
    var catCols = examId === 'csirnet' ? ['UR','EWS','OBC','SC','ST','PwD'] : ['UR','OBC','EWS','SC','ST'];
    var head = '<tr><th>Session</th><th>Track</th>' + catCols.map(function(c){ return '<th>'+c+'</th>'; }).join('') + '</tr>';
    var rows = records.map(function(r){
      return '<tr><td><b>'+r.session+'</b></td><td>'+r.track+'</td>' +
        catCols.map(function(c){
          if(examId === 'csirnet') return '<td>'+csirCutoffCellHTML(r, c)+'</td>';
          return '<td>'+(r[c] !== undefined ? '<span class="mba-cutoff-badge">'+r[c]+'</span>' : '\u2014')+'</td>';
        }).join('') +
      '</tr>';
    }).join('');
    var unitNote = examId === 'csirnet'
      ? 'Each cell shows the official percentile/% first, with the approximate marks out of 200 just below it. Life Sciences is scored as an NTA percentile (large applicant pool) \u2014 its marks figure is an approximate range, not exact.'
      : 'Figures are aggregate marks out of 300 (Paper 1 + Paper 2 combined).';
    return '<div style="overflow:auto;"><table class="mba-cutoff-table"><thead>'+head+'</thead><tbody>'+rows+'</tbody></table></div>'+
      '<div class="ca-step-note" style="margin-top:10px;">'+unitNote+' Source: '+records[0].source+(records[0].verified ? '' : ' \u2014 Verification Required.')+'</div>';
  }

  function csirPatternHTML(pp){
    var partsHTML = pp.parts.map(function(p){
      return '<div class="csir-part-card"><div class="csir-part-letter">'+p[0]+'</div><div class="csir-part-info">'+p[1]+'</div><div class="csir-part-stats"><span class="csir-plus">'+p[2]+'</span><span class="csir-minus">'+p[3]+'</span></div></div>';
    }).join('');
    var noteHTML = pp.note ? '<div class="ca-step-note" style="margin-top:8px;">'+pp.note+'</div>' : '';
    return '<div class="csir-pattern-grid">'+partsHTML+'</div>'+
      '<div class="csir-pattern-total">Total: '+pp.attempt+' questions attempted (of '+pp.totalQ+') · '+pp.marks+' marks · 3 hours</div>'+
      noteHTML;
  }

  function subjectDetailPage(examId, subjectId){
    var exam = EXAMS[examId];
    var subjectsMap = subjectsMapFor(examId);
    var s = subjectsMap[subjectId];
    if(!s) return subjectsListPage(examId);
    return back(exam.shortName+' Subjects', "cunRender('"+examId+"','subjects')") + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">${exam.shortName} \u2014 ${s.code}</div>
        <h2>${s.name}</h2>
        <p class="sub">${s.desc}</p>

        <div class="exam-block-label">Important Topics</div>
        <div class="ca-step-card">${chipList(s.keyTopics || [])}</div>

        <div class="exam-block-label">Paper Pattern & Marking Structure</div>
        <div class="ca-step-card">${(examId === 'csirnet' && s.partPattern) ? csirPatternHTML(s.partPattern) : exam.pattern + '<div class="ca-step-note" style="margin-top:8px;">'+exam.marking+'</div>'}</div>

        <div class="exam-block-label">Cutoff Trend</div>
        <div class="ca-step-card">${cutoffTrendTable(examId, s.name)}</div>

        <div class="exam-block-label">Career Through This Subject</div>
        <div class="ca-step-card">${chipList(s.careers || [])}</div>
      </section>`;
  }

  function bindCun(r, examId){
    // buttons use inline onclick="cunRender(...)" so no extra binding needed
  }

  // Override renderExamPage: new card-grid UI for csirnet/ugcnet, untouched behaviour for iitjam.
  renderExamPage = function(examId){
    window._lastExamContext = examId;
    if(examId === 'csirnet' || examId === 'ugcnet'){
      window.cunRender(examId, 'overview');
      return;
    }
    return _originalRenderExamPage(examId);
  };

  // Fix: JAM's own "Cut-offs" / "View cut-off trend" buttons were routing into the
  // generic UGC-NET cutoffs dashboard (renderCutoffs takes no examId param, so it
  // always rendered UGC-NET content regardless of where the click came from).
  // This gives JAM its own real, last-3-years, subject-wise cutoff page instead.
  function jamCutoffsPage(){
    var subjects = ['Mathematics','Physics','Chemistry','Biotechnology','Mathematical Statistics','Geology','Economics'];
    var years = ['2024','2025','2026'];
    var catOptions = ['General','OBC-NCL/EWS','SC/ST/PwD'];
    var catOpts = catOptions.map(function(c){ return '<option value="'+c+'">'+c+'</option>'; }).join('');
    var head = '<tr><th>Subject</th>' + years.map(function(y){ return '<th>'+y+'</th>'; }).join('') + '</tr>';
    var rows = subjects.map(function(s){
      var cells = years.map(function(y){
        var rec = JAM_CUTOFFS.find(function(c){ return c.subject === s && c.session === y; });
        return '<td data-jam-subj="'+s+'" data-jam-year="'+y+'"><span class="mba-cutoff-badge">'+(rec ? rec.General : '\u2014')+'</span></td>';
      }).join('');
      return '<tr><td><b>'+s+'</b></td>'+cells+'</tr>';
    }).join('');
    var html =
      '<div class="page-header">'+
        '<div class="page-eyebrow">IIT-JAM CUT-OFFS</div>'+
        '<h1 class="page-title">IIT-JAM Qualifying Cut-off \u2014 Last 3 Years, Subject-wise</h1>'+
        '<p class="page-desc">Official qualifying marks (out of 100) needed to appear in JOAPS counselling \u2014 select a category to see all 7 subjects across 2024, 2025 and 2026.</p>'+
      '</div>'+
      '<div class="card" style="margin-bottom:18px;padding:18px;">'+
        '<div class="df-field" style="max-width:280px;margin-bottom:16px;"><label>Category</label><select id="jamCutoffCat">'+catOpts+'</select></div>'+
        '<div style="overflow:auto;"><table class="mba-cutoff-table" id="jamCutoffTable"><thead>'+head+'</thead><tbody>'+rows+'</tbody></table></div>'+
        '<div class="ca-step-note" style="margin-top:10px;">These are qualifying cutoffs (the minimum to appear on the merit list) \u2014 the actual IIT/programme a candidate gets depends on their All India Rank in JOAPS counselling, not just clearing this mark. Source: Official JAM qualifying cutoff releases (rotating organising IIT each year).</div>'+
      '</div>'+
      '<button class="btn" id="jamCutoffBackBtn">← Back to IIT-JAM</button>';
    var root = document.getElementById('pageRoot');
    root.innerHTML = html;
    var catSel = document.getElementById('jamCutoffCat');
    catSel.onchange = function(){
      var cat = this.value;
      document.querySelectorAll('#jamCutoffTable td[data-jam-subj]').forEach(function(td){
        var s = td.getAttribute('data-jam-subj'), y = td.getAttribute('data-jam-year');
        var rec = JAM_CUTOFFS.find(function(c){ return c.subject === s && c.session === y; });
        td.innerHTML = '<span class="mba-cutoff-badge">'+(rec && rec[cat] !== undefined ? rec[cat] : '\u2014')+'</span>';
      });
    };
    document.getElementById('jamCutoffBackBtn').onclick = function(){ goTo('iitjam'); };
  }

  var _originalRenderCutoffs = renderCutoffs;
  renderCutoffs = function(sub){
    if(window._lastExamContext === 'iitjam'){
      return jamCutoffsPage();
    }
    return _originalRenderCutoffs(sub);
  };
  // PAGE_RENDERERS.cutoffs captured a direct reference to the original renderCutoffs
  // when the dispatch object was built, so reassigning the variable above alone
  // doesn't change what goTo('cutoffs') actually calls — the dispatch entry itself
  // must be repointed too.
  PAGE_RENDERERS.cutoffs = renderCutoffs;

  // Give CSIR-NET and UGC-NET the same persistent module sidebar as every other category.
  var previousOpenCategory = window.cidOpenCategory;
  window.cidOpenCategory = function(name){
    if(name === 'CSIR-NET' || name === 'UGC-NET'){
      var examId = name === 'CSIR-NET' ? 'csirnet' : 'ugcnet';
      document.body.classList.remove('cid-home-mode');
      document.body.classList.add('cid-category-mode');
      currentPage = examId;
      if(typeof window.cidRenderCategorySidebar === 'function'){
        var sbItems = [
          {key:'overview', label:name+' Overview'},
          {key:'examdetails', label:'Exam Details'},
          {key:'subjects', label:'Subjects'}
        ];
        if(examId === 'csirnet'){
          sbItems.push({key:'allcutoffs', label:'Cutoff Trend (All Subjects)'});
          sbItems.push({key:'selectionratio', label:'Selection Ratio'});
          sbItems.push({key:'results', label:'PW Results'});
        }
        window.cidRenderCategorySidebar(name, name === 'CSIR-NET' ? 'Science & Research' : 'Teaching & Research', sbItems, 'overview', function(key){
          window.cunRender(examId, key === 'overview' ? 'overview' : key);
          window.cidSetSidebarActive(key);
        });
      } else if(typeof renderSidebar === 'function') { renderSidebar(); }
      var home = document.getElementById('cid-category-home');
      if(home) home.style.display = 'none';
      var topbar = document.querySelector('.cid-category-topbar');
      if(topbar){
        topbar.style.display = 'flex';
        var label = topbar.querySelector('.cid-current-category');
        if(label) label.textContent = name;
      }
      document.getElementById('pageRoot').innerHTML = '';
      window.cunRender(examId, 'overview');
      return;
    }
    if(typeof previousOpenCategory === 'function') return previousOpenCategory(name);
  };
})();
