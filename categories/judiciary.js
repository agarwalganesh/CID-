// Category module extracted from index.html.

(function(){
  function root(){ return document.getElementById('pageRoot'); }
  function back(label, action){ return '<button class="cid-back" type="button" onclick="'+action+'" style="margin-top:22px;">← Back to '+label+'</button>'; }
  function chipList(items){ return '<div class="ca-topic-chips">' + items.map(function(t){ return '<span class="ca-topic-chip">'+t+'</span>'; }).join('') + '</div>'; }

  var JUD_EXAMS = {
    up: { icon:'⚖️', name:'UP PCS-J', sub:'Uttar Pradesh \u2014 Civil Judge (Junior Division)',
      examDetails:{ body:'Uttar Pradesh Public Service Commission (UPPSC)', stages:['Prelims (Objective)','Mains (Descriptive)','Interview'], marking:'Prelims: objective MCQ, no confirmed universal negative-marking rule \u2014 check the live notification.', structure:'Prelims: General Knowledge + General Law papers (qualifying, used for Mains shortlisting). Mains: multiple descriptive law papers + language paper. Interview: personality/viva-voce.', frequency:'Notified periodically by UPPSC \u2014 not a fixed annual cycle.', posts:['Civil Judge (Junior Division)'] },
      eligibilitySummary:'LLB from a recognised university, knowledge of Hindi in Devanagari script, Indian citizen. Age 22\u201335 years (as on 1 July of the exam year), with category-based relaxation. Up to 4 attempts.',
      subjects:['General Knowledge & Current Affairs','General Law (Constitution, CPC, CrPC, Evidence Act)','Hindi Language','Civil Law (Mains)','Criminal Law (Mains)','Language Paper (Mains)'],
      cutoff:{ note:'UP PCS-J cutoff varies sharply by cycle and category \u2014 no single stable figure. Prelims General category commonly needs to clear well above the 45%+ qualifying bar; check UPPSC\u2019s live cutoff release for the current cycle.' },
      career:'Civil Judge (JD) \u2192 Civil Judge (Senior Division) \u2192 Additional District Judge \u2192 District Judge, with possible elevation to the Allahabad High Court on rare, merit-driven selection.'
    },
    bihar: { icon:'⚖️', name:'Bihar Judicial Service', sub:'Bihar \u2014 Civil Judge (Junior Division)',
      examDetails:{ body:'Bihar Public Service Commission (BPSC)', stages:['Prelims (Objective)','Mains (5 compulsory papers)','Interview (Viva-Voce)'], marking:'Prelims: General 45% qualifying, Reserved 40%. Interview: minimum 35% required to be included in the final successful list.', structure:'Mains has 5 compulsory descriptive law papers. Final merit = Mains + Interview marks.', frequency:'Notified periodically by BPSC.', posts:['Civil Judge (Junior Division)'] },
      eligibilitySummary:'LLB from a BCI-recognised institute, Indian citizen. Age 22\u201335 years (as on 1 August of the reference year), with category-based relaxation.',
      subjects:['General Knowledge','General Law','Hindi (qualifying)','Civil Law papers (Mains)','Criminal Law papers (Mains)','Language & Essay Paper (Mains)'],
      cutoff:{ note:'Prelims qualifying: 45% (General), 40% (Reserved). Final selection depends on the combined Mains + Interview merit list for that cycle \u2014 varies year to year with vacancies.' },
      career:'Civil Judge (JD) \u2192 Civil Judge (Senior Division) \u2192 Additional District Judge \u2192 District Judge under the Patna High Court.'
    },
    mp: { icon:'⚖️', name:'MP Civil Judge', sub:'Madhya Pradesh \u2014 Civil Judge (Entry Level)',
      examDetails:{ body:'Madhya Pradesh Public Service Commission (MPPSC), under the MP High Court', stages:['Prelims (Objective)','Mains (Descriptive)','Interview'], marking:'General/OBC candidates need an impressive aggregate (commonly cited around 70%) across all three stages to be considered highly competitive \u2014 confirm exact category-wise cutoffs from the live notification.', structure:'Some entry categories require continuous legal practice as an advocate for at least 3 years before the application deadline \u2014 check the specific notification, as this requirement has varied across cycles.', frequency:'Notified periodically by MPPSC.', posts:['Civil Judge (Entry Level)'] },
      eligibilitySummary:'LLB from a recognised university, Indian citizen. Age band varies by cycle and category \u2014 confirm from the live MPPSC notification. Some cycles have required 3 years of continuous legal practice for certain entry categories.',
      subjects:['General Knowledge','General Law & Constitution','Hindi','Civil Law (Mains)','Criminal Law (Mains)','Procedural Law (CPC/CrPC/Evidence Act)'],
      cutoff:{ note:'MP judiciary cutoffs vary significantly by cycle \u2014 always confirm the current year\u2019s category-wise cutoff from MPPSC\u2019s official release rather than quoting a past cycle\u2019s figure.' },
      career:'Civil Judge (Entry Level) \u2192 Senior Division \u2192 Additional District Judge \u2192 District Judge under the Madhya Pradesh High Court.'
    },
    rajasthan: { icon:'⚖️', name:'RJS (Rajasthan)', sub:'Rajasthan Judicial Service \u2014 Civil Judge',
      examDetails:{ body:'Rajasthan High Court', stages:['Prelims (Objective)','Mains (Descriptive)','Interview (Viva-Voce)'], marking:'Standard 3-stage judiciary marking \u2014 Prelims qualifying, Mains descriptive with aggregate + per-paper minimums, Interview as the final differentiator.', structure:'Knowledge of Hindi in Devanagari script is a specific, often-overlooked eligibility requirement for Rajasthan.', frequency:'Notified periodically by the Rajasthan High Court.', posts:['Civil Judge'] },
      eligibilitySummary:'LLB from a recognised university, Indian citizen, knowledge of Hindi in Devanagari script. Age 23\u201335 years, with category-based relaxation.',
      subjects:['General Knowledge','Rajasthan-specific GK & Current Affairs','General Law','Civil Law (Mains)','Criminal Law (Mains)','Hindi/Language Paper'],
      cutoff:{ note:'RJS cutoff varies by cycle and category \u2014 always confirm from the Rajasthan High Court\u2019s live notification/result release.' },
      career:'Civil Judge \u2192 Senior Division \u2192 Additional District Judge \u2192 District Judge under the Rajasthan High Court.'
    },
    delhi: { icon:'⚖️', name:'DJS (Delhi)', sub:'Delhi Judicial Service \u2014 Civil Judge',
      examDetails:{ body:'Delhi High Court', stages:['Prelims (Objective)','Mains (Descriptive)','Interview (Viva-Voce)'], marking:'Standard 3-stage judiciary marking \u2014 Prelims qualifying, Mains descriptive, Interview as the final differentiator.', structure:'Considered one of the more prestigious and competitive state judiciary exams given Delhi\u2019s High Court prominence.', frequency:'Notified periodically by the Delhi High Court.', posts:['Civil Judge'] },
      eligibilitySummary:'LLB from a recognised university, Indian citizen, practising advocate or eligible to practise. Age band set by the Delhi High Court\u2019s notification \u2014 confirm current limits from the live release.',
      subjects:['General Knowledge','General Law & Constitution','Civil Law (Mains)','Criminal Law (Mains)','Procedural Law','Language/Essay Paper'],
      cutoff:{ note:'DJS cutoff is highly competitive given limited vacancies \u2014 always confirm from the Delhi High Court\u2019s official result release rather than quoting an old figure.' },
      career:'Civil Judge \u2192 Senior Division \u2192 Additional District Judge \u2192 District Judge under the Delhi High Court \u2014 often seen as a strong stepping stone given Delhi\u2019s legal ecosystem.'
    },
    higher: { icon:'🏛️', name:'Higher Judicial Service', sub:'Direct District Judge Entry (via Bar)',
      examDetails:{ body:'Respective State Public Service Commission / High Court', stages:['Written Exam','Interview'], marking:'Pattern varies by state \u2014 generally a written law paper followed by an interview, without a separate "Prelims" stage since candidates already have substantial practice experience.', structure:'A separate, senior entry route directly to District Judge \u2014 distinct from the Civil Judge (Junior Division) track most states run via PCS-J.', frequency:'Notified periodically, far less frequently than Civil Judge recruitment.', posts:['District Judge (Entry Level)'] },
      eligibilitySummary:'Must be an advocate with substantial continuous practice at the Bar \u2014 commonly 7 years, as per Article 233 of the Constitution and the relevant state\u2019s rules. Age limits vary by state.',
      subjects:['Constitutional Law','Civil & Criminal Procedure','Evidence Act','Substantive Civil & Criminal Law','Current judicial pronouncements & landmark judgments'],
      cutoff:{ note:'Much smaller vacancy pool than Civil Judge recruitment \u2014 cutoffs are highly state- and cycle-specific. Always confirm from that state\u2019s official notification.' },
      career:'District Judge \u2192 Additional District Judge (Senior Scale) \u2192 potential elevation to the High Court Bench on rare, merit-driven selection \u2014 this is the most senior entry point into the subordinate judiciary.'
    }
  };

  var EXAM_LIST = ['up','bihar','mp','rajasthan','delhi','higher'];

  function overview(){
    var cards = EXAM_LIST.map(function(k){
      var e = JUD_EXAMS[k];
      return '<button type="button" class="exam-icon-card" onclick="judRender(\''+k+'\')">'+
        '<span class="exam-icon">'+e.icon+'</span>'+
        '<b>'+e.name+'</b>'+
        '<span>'+e.sub+'</span>'+
        '<em>Explore →</em>'+
      '</button>';
    }).join('');
    return `
      <section class="upsc-section" style="margin-top:28px;">
        <div class="cid-kicker">JUDICIARY INTELLIGENCE</div>
        <h1 style="margin:8px 0 8px;">Judicial Services \u2014 PCS-J / Civil Judge</h1>
        <p class="sub">Not a single national exam \u2014 each state runs its own Judicial Service Examination via its State PSC or High Court. Pick a state to explore its specific process.</p>
        <div class="exam-icon-grid" style="margin-top:22px;">${cards}</div>
      </section>`;
  }

  function examOverview(key){
    var e = JUD_EXAMS[key];
    if(!e) return overview();
    var sections = [
      { key:'exam', icon:'📋', title:'Exam Details & Pattern', desc:'Conducting body, stages, marking and frequency.' },
      { key:'eligibility', icon:'✅', title:'Eligibility Criterion', desc:'Education, age band and an interactive quick-check tool.' },
      { key:'subjects', icon:'📚', title:'Syllabus', desc:'Papers and topics tested across Prelims and Mains.' },
      { key:'cutoff', icon:'📊', title:'Cutoff', desc:'What score gets a candidate through \u2014 and why it varies so much.' },
      { key:'career', icon:'💼', title:'Career Path', desc:'Where this appointment leads over a judicial career.' }
    ];
    var cardsHTML = sections.map(function(s){
      return '<button class="upsc-module" type="button" onclick="judRender(\''+key+':'+s.key+'\')"><div class="i">'+s.icon+'</div><h3>'+s.title+'</h3><p>'+s.desc+'</p></button>';
    }).join('');
    return back('Judiciary Overview', "judRender('overview')") + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">JUDICIARY</div>
        <h2>${e.icon} ${e.name}</h2>
        <p class="sub">${e.sub}</p>
        <div class="upsc-grid" style="margin-top:22px;">${cardsHTML}</div>
      </section>`;
  }

  function examDetailsBody(e){
    return '<div class="ca-detail-block"><div class="ca-step-label">Conducting Body</div><div class="ca-step-card">'+e.examDetails.body+'</div></div>'+
      '<div class="ca-detail-block"><div class="ca-step-label">Stages</div><div class="ca-step-card">'+
        '<div class="exam-stage-flow">'+e.examDetails.stages.map(function(s,i){ return (i>0?'<span class="exam-stage-arrow">→</span>':'')+'<span class="exam-stage-chip">'+s+'</span>'; }).join('')+'</div>'+
      '</div></div>'+
      '<div class="ca-detail-block"><div class="ca-step-label">Marking</div><div class="ca-step-card">'+e.examDetails.marking+'</div></div>'+
      '<div class="ca-detail-block"><div class="ca-step-label">Structure</div><div class="ca-step-card">'+e.examDetails.structure+'</div></div>'+
      '<div class="ca-detail-block"><div class="ca-step-label">Frequency</div><div class="ca-step-card">'+e.examDetails.frequency+'</div></div>'+
      '<div class="ca-detail-block"><div class="ca-step-label">Posts</div><div class="ca-step-card">'+chipList(e.examDetails.posts)+'</div></div>';
  }

  function eligibilityBody(key, e){
    var checkerHTML =
      '<div class="df-checker"><div class="df-check-grid">'+
        '<div class="df-field"><label>Date of Birth</label><input id="judDob" type="date"></div>'+
        '<div class="df-field"><label>Education Status</label><select id="judEdu"><option value="completed">LLB Completed</option><option value="final">Final Year / Appearing</option><option value="notyet">Not Yet LLB</option></select></div>'+
      '</div>'+
      '<div class="upsc-checker-actions"><button class="upsc-check-btn" id="judCheckBtn">Check Eligibility</button><button class="upsc-reset-btn" id="judResetBtn">Reset</button></div>'+
      '<div id="judEligibilityResult" class="upsc-check-result"></div></div>';
    return '<div class="ca-detail-block"><div class="ca-step-label">At a Glance</div><div class="ca-step-card">'+e.eligibilitySummary+'</div></div>'+
      '<div class="ca-detail-block"><div class="ca-step-label">Quick Eligibility Checker</div>'+checkerHTML+
      '<div class="ca-step-note">Age bands vary meaningfully by state and change across notification cycles \u2014 always confirm the exact current-cycle limits before giving a final answer.</div></div>';
  }

  var JUD_AGE_BANDS = { up:[22,35], bihar:[22,35], mp:[21,40], rajasthan:[23,35], delhi:[21,32], higher:[35,45] };

  function ageOn(dobStr, refDate){
    var d = new Date(dobStr+'T00:00:00');
    var age = refDate.getFullYear() - d.getFullYear();
    if(refDate.getMonth() < d.getMonth() || (refDate.getMonth() === d.getMonth() && refDate.getDate() < d.getDate())) age--;
    return age;
  }

  function bindChecker(key){
    var checkBtn = document.getElementById('judCheckBtn');
    var resetBtn = document.getElementById('judResetBtn');
    if(!checkBtn) return;
    var today = new Date();
    checkBtn.onclick = function(){
      var out = document.getElementById('judEligibilityResult');
      var dob = document.getElementById('judDob').value;
      if(!dob){
        out.className = 'upsc-check-result show warn';
        out.innerHTML = '<div class="upsc-result-title">Enter Date of Birth</div><div class="upsc-result-sub">Please select a DOB to calculate age eligibility.</div>';
        return;
      }
      var age = ageOn(dob, today);
      var edu = document.getElementById('judEdu').value;
      var band = JUD_AGE_BANDS[key];
      var ok = true, reasons = [];
      if(age < band[0] || age > band[1]){ ok = false; reasons.push('Age must be between '+band[0]+' and '+band[1]+' years for this exam (currently '+age+'; exact band varies by cycle).'); }
      if(edu === 'notyet'){ ok = false; reasons.push('Must hold (or be in the final year of) an LLB degree.'); }
      if(key === 'higher'){ reasons.push('Higher Judicial Service also requires ~7 years of continuous Bar practice \u2014 this quick-check does not verify practice years.'); }
      var stats = [['Age Today', age+' years'], ['Age Band', band[0]+'\u2013'+band[1]+' yrs (typical)'], ['Education', edu === 'completed' ? 'LLB Completed' : (edu === 'final' ? 'Final Year' : 'Not Yet LLB')]];
      out.className = 'upsc-check-result show ' + (ok ? 'ok' : 'no');
      out.innerHTML = '<div class="upsc-result-title">'+(ok ? 'Eligible for quick check' : 'Not Eligible for quick check')+'</div>'+
        '<div class="upsc-result-sub">'+(ok ? 'Age and education conditions are within the selected limits.' : reasons.join(' '))+'</div>'+
        '<div class="upsc-result-grid">'+stats.map(function(s){ return '<div class="upsc-result-stat"><span>'+s[0]+'</span><b>'+s[1]+'</b></div>'; }).join('')+'</div>';
    };
    if(resetBtn){
      resetBtn.onclick = function(){
        var dobEl = document.getElementById('judDob'); if(dobEl) dobEl.value = '';
        var out = document.getElementById('judEligibilityResult'); if(out) out.className = 'upsc-check-result';
      };
    }
  }

  function sectionDetail(examKey, section){
    var e = JUD_EXAMS[examKey];
    if(!e) return overview();
    var title = '', body = '';
    if(section === 'exam'){ title = 'Exam Details & Pattern'; body = examDetailsBody(e); }
    else if(section === 'eligibility'){ title = 'Eligibility Criterion'; body = eligibilityBody(examKey, e); }
    else if(section === 'subjects'){ title = 'Syllabus'; body = '<div class="ca-detail-block"><div class="ca-step-card">'+chipList(e.subjects)+'</div></div>'; }
    else if(section === 'cutoff'){ title = 'Cutoff'; body = '<div class="ca-detail-block"><div class="ca-step-card">'+e.cutoff.note+'</div></div>'; }
    else if(section === 'career'){ title = 'Career Path'; body = '<div class="ca-detail-block"><div class="ca-step-card">'+e.career+'</div></div>'; }

    return back(e.name, "judRender('"+examKey+"')") + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">${e.name.toUpperCase()}</div>
        <h2>${title}</h2>
        ${body}
      </section>`;
  }

  window.judRender = function(view){
    var r = root();
    if(!r) return;
    r.style.display = 'block';
    if(view && view.indexOf(':') > -1){
      var parts = view.split(':');
      r.innerHTML = sectionDetail(parts[0], parts[1]);
      r.setAttribute('data-current-view', view);
      if(parts[1] === 'eligibility') bindChecker(parts[0]);
    } else if(view && JUD_EXAMS[view]){
      r.innerHTML = examOverview(view);
      r.setAttribute('data-current-view', view);
    } else {
      r.innerHTML = overview();
      r.setAttribute('data-current-view', 'overview');
    }
  };

  var previousOpenCategory = window.cidOpenCategory;
  window.cidOpenCategory = function(name){
    if(name === 'Judiciary'){
      document.body.classList.remove('cid-home-mode');
      document.body.classList.add('cid-category-mode');
      if(typeof window.cidRenderCategorySidebar === 'function'){
        window.cidRenderCategorySidebar('Judiciary', 'Judicial Services', [
          {key:'overview', label:'Judiciary Overview'},
          {key:'up', label:'UP PCS-J'},
          {key:'bihar', label:'Bihar Judicial Service'},
          {key:'mp', label:'MP Civil Judge'},
          {key:'rajasthan', label:'RJS (Rajasthan)'},
          {key:'delhi', label:'DJS (Delhi)'},
          {key:'higher', label:'Higher Judicial Service'}
        ], 'overview', function(key){
          window.judRender(key === 'overview' ? 'overview' : key);
          window.cidSetSidebarActive(key);
        });
      }
      var home = document.getElementById('cid-category-home');
      if(home) home.style.display = 'none';
      var topbar = document.querySelector('.cid-category-topbar');
      if(topbar){
        topbar.style.display = 'flex';
        var label = topbar.querySelector('.cid-current-category');
        if(label) label.textContent = 'Judiciary';
      }
      document.getElementById('pageRoot').innerHTML = '';
      window.judRender('overview');
      return;
    }
    if(typeof previousOpenCategory === 'function') return previousOpenCategory(name);
  };
})();
