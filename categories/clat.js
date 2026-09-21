// Category module extracted from index.html.

(function(){
  function root(){ return document.getElementById('pageRoot'); }
  function back(label, target){ return '<button class="cid-back" type="button" data-clat-back="'+target+'" style="margin-top:22px;">← Back to '+label+'</button>'; }
  function chipList(items){ return '<div class="ca-topic-chips">' + items.map(function(t){ return '<span class="ca-topic-chip">'+t+'</span>'; }).join('') + '</div>'; }

  var LEVELS = {
    ug: {
      name:'CLAT UG', icon:'🎓', sub:'5-year Integrated Law Programmes (BA LLB & equivalent)',
      overview:'CLAT UG is the single national entrance test for 5-year integrated undergraduate law programmes (BA LLB, BBA LLB, B.Com LLB, etc.) at the National Law Universities. It is an aptitude test, not a knowledge test \u2014 the Consortium designs it to assess reading, reasoning and analytical ability rather than rote legal knowledge.',
      eligibility:'12th pass (or appearing) from any recognised board with a minimum of 45% aggregate (40% for SC/ST/PwD). There is <b>no upper age limit</b> and <b>no cap on the number of attempts.</b>',
      pattern:'120 MCQs / 120 marks, 2 hours, conducted <b>offline</b> (pen-and-paper, OMR sheet) \u2014 unlike most other national entrance tests which have moved to CBT. Each correct answer: +1. Each wrong answer: \u22120.25. There are <b>no sectional cut-offs</b> \u2014 only the total score determines rank.',
      subjects:[
        {name:'Legal Reasoning', desc:'~30 questions, the single highest-weighted section (~25% of marks). Passage-based scenarios testing application of legal principles \u2014 no prior legal knowledge required, but strong reading speed matters.'},
        {name:'Current Affairs & General Knowledge', desc:'~30 questions, passage-based, drawing on the last 12 months of news, static GK, and significant national/international events.'},
        {name:'English Language', desc:'22\u201326 questions, comprehension passages (~450 words) testing vocabulary, grammar and inference.'},
        {name:'Logical Reasoning', desc:'22\u201324 questions \u2014 puzzles, deductions, critical reasoning and argument analysis, passage-based.'},
        {name:'Quantitative Techniques', desc:'10\u201312 questions, Class 10 difficulty level \u2014 data interpretation and basic numerical ability, all passage/data-based.'}
      ],
      dates:[
        ['Application Opens','~August (previous year)'],
        ['Exam Date','First Sunday of December (typically)'],
        ['Result Declaration','Within ~3\u20134 weeks of the exam'],
        ['Counselling & Seat Allotment','January\u2013June, across 5 allotment rounds']
      ],
      nlus:[
        ['NLSIU Bangalore','1','Rank 1\u2013102 (Gen) \u2014 India\u2019s top-ranked law school'],
        ['NALSAR Hyderabad','3','Rank 4\u2013167 (Gen)'],
        ['WBNUJS Kolkata','4','Rank 140\u2013327 (Gen, BA LLB)'],
        ['NLIU Bhopal','12','Rank ~200\u2013500 (Gen)'],
        ['GNLU Gandhinagar','8','Rank 8\u2013464 (Gen)'],
        ['NLU Jodhpur','7','Consistently among the top 5\u20137 choices nationally'],
        ['RMLNLU Lucknow','20','Rank 357\u2013764 (Gen)'],
        ['HNLU Raipur','15','Mid-tier, strong regional reputation'],
        ['RGNUL Patiala','14','Mid-tier, popular in North India'],
        ['CNLU Patna','18','Mid-tier'],
        ['NUALS Kochi','17','Mid-tier, strong in Kerala/South India'],
        ['NLU Odisha (Cuttack)','22','Mid-tier'],
        ['NUSRL Ranchi','23','Mid-tier'],
        ['MNLU Mumbai','10','Newer but high-demand due to Mumbai location'],
        ['MNLU Nagpur','\u2014','Newer NLU'],
        ['MNLU Aurangabad','\u2014','Newer NLU'],
        ['DSNLU Visakhapatnam','\u2014','Newer NLU'],
        ['TNNLS Tiruchirappalli','\u2014','Newer NLU, South India'],
        ['HPNLU Shimla','\u2014','Newer NLU'],
        ['DBRANLU Sonipat (Haryana)','\u2014','Newer NLU'],
        ['NLUJAA Guwahati','\u2014','Newer NLU, Northeast region'],
        ['NLU Agartala','\u2014','Newer/lower-demand NLU \u2014 most accessible closing ranks']
      ],
      nluNote:'25 NLUs exist, but <b>NLU Delhi runs its own separate exam (AILET)</b> and <b>NLU Meghalaya doesn\u2019t use CLAT either</b> \u2014 so CLAT actually feeds admission to the remaining ~23 NLUs plus 60+ affiliated private law colleges nationwide. NIRF rank shown where established; newer NLUs are still building their NIRF standing.',
      career:['Litigation & courtroom practice','Corporate law / in-house counsel','Judiciary (after further judicial exams)','Civil Services (law background is a strong asset)','Legal Process Outsourcing (LPO)','Policy research & legal journalism']
    },
    pg: {
      name:'CLAT PG', icon:'📖', sub:'1-year LLM Programme',
      overview:'CLAT PG is the national entrance test for the 1-year LLM (Master of Laws) programme at National Law Universities. Unlike CLAT UG\u2019s aptitude focus, CLAT PG directly tests depth of legal subject knowledge \u2014 it assumes a law degree background. Around 17,000 candidates compete for roughly 1,590 LLM seats across 26 NLUs \u2014 a much tighter seat-to-applicant ratio than UG.',
      eligibility:'An LLB / 5-year integrated law degree (or equivalent) with a minimum of 50% aggregate (45% for SC/ST). Final-year law students awaiting results can also apply, subject to the Consortium\u2019s conditions.',
      pattern:'120 MCQs / 120 marks, 2 hours, <b>same marking scheme as CLAT UG</b>: +1 for correct, \u22120.25 for wrong. Offline, pen-and-paper (OMR) mode. No sectional cut-offs.',
      subjects:[
        {name:'Constitutional Law', desc:'The single most heavily weighted subject \u2014 fundamental rights, directive principles, constitutional amendments, landmark judgments.'},
        {name:'Jurisprudence', desc:'Legal theory, schools of jurisprudence, concepts of law, rights and justice.'},
        {name:'Administrative Law', desc:'Delegated legislation, judicial review, principles of natural justice.'},
        {name:'Law of Contracts & Torts', desc:'Core private law principles and application-based scenarios.'},
        {name:'Criminal Law, International Law & IPR', desc:'Additional core and specialised law areas drawn from the standard LLB curriculum.'}
      ],
      dates:[
        ['Application Opens','~August (previous year)'],
        ['Exam Date','Same day as CLAT UG (first Sunday of December, typically)'],
        ['Result Declaration','Within ~3\u20134 weeks of the exam'],
        ['Counselling & Seat Allotment','January\u2013May, run separately from UG counselling, across 5 rounds']
      ],
      nlus:[
        ['NLSIU Bangalore','1','AIR ~2\u2013108 (Gen) \u2014 the most competitive LLM in the country'],
        ['NALSAR Hyderabad','3','AIR ~5\u2013143 (Gen)'],
        ['WBNUJS Kolkata','4','AIR ~460\u2013610 (Gen, varies by round/year)'],
        ['NLU Jodhpur','7','Cutoff 85+ marks'],
        ['NLIU Bhopal','12','Cutoff 85+ marks'],
        ['GNLU Gandhinagar','8','Cutoff 85+ marks'],
        ['RMLNLU Lucknow','20','Cutoff 78+ marks'],
        ['MNLU Mumbai','10','Cutoff 82+ marks \u2014 high demand for Mumbai location'],
        ['HNLU Raipur','15','Mid-tier'],
        ['RGNUL Patiala','14','Mid-tier'],
        ['CNLU Patna','18','Mid-tier'],
        ['GNLU Silvassa (campus)','\u2014','Mid-tier'],
        ['NLU Odisha (Cuttack)','22','~75+ marks \u2014 mid-lower tier'],
        ['NUSRL Ranchi','23','Mid-lower tier'],
        ['NUALS Kochi','17','Mid-lower tier'],
        ['MNLU Nagpur / Aurangabad','\u2014','Newer/lower-demand'],
        ['DSNLU Visakhapatnam','\u2014','Newer/lower-demand'],
        ['TNNLU streams','\u2014','Newer/lower-demand'],
        ['HPNLU Shimla','\u2014','Newer/lower-demand'],
        ['NLUJAA Guwahati','\u2014','Newer/lower-demand'],
        ['NLU Agartala','\u2014','Lowest closing rank (~3000+, General) \u2014 most accessible']
      ],
      nluNote:'26 NLUs participate in CLAT PG counselling. NLU Delhi (AILET) and NLU Meghalaya remain outside this process.',
      rankPredictor:{
        title:'If Your CLAT PG Rank Range Is\u2026 You\u2019ll Likely Get',
        note:'Based on actual 2026 closing-rank data across 5 counselling rounds (General category, ~17,335 candidates for ~1,590 seats). Category-wise ranks (SC/ST/OBC/EWS) close much later than General \u2014 always check the specific round\u2019s category-wise release.',
        rows:[
          ['1 \u2013 150','NLSIU Bangalore or NALSAR Hyderabad'],
          ['150 \u2013 500','WBNUJS Kolkata, NLU Jodhpur, NLIU Bhopal, or GNLU Gandhinagar'],
          ['500 \u2013 1,000','RMLNLU Lucknow, MNLU Mumbai, HNLU Raipur, or RGNUL Patiala'],
          ['1,000 \u2013 2,000','CNLU Patna, NUSRL Ranchi, NUALS Kochi, NLU Odisha, or GNLU Silvassa'],
          ['2,000 \u2013 3,000+','MNLU Nagpur/Aurangabad, DSNLU, TNNLU, HPNLU, NLUJAA Guwahati, or NLU Agartala']
        ]
      },
      career:['Academia & legal research','Judicial services (LLM strengthens judiciary exam profile)','Specialised legal practice (IP, Corporate, Tax law)','Corporate legal advisory & compliance','Policy think-tanks & legal consultancy']
    }
  };

  function overview(){
    var cards = ['ug','pg'].map(function(k){
      var l = LEVELS[k];
      return '<button type="button" class="ca-level-card" data-clat-open="'+k+'">'+
        '<span class="ca-level-icon">'+l.icon+'</span>'+
        '<b>'+l.name+'</b>'+
        '<span>'+l.sub+'</span>'+
        '<em>Explore →</em>'+
      '</button>';
    }).join('');
    return `
      <section class="upsc-section" style="margin-top:28px;">
        <div class="cid-kicker">CLAT INTELLIGENCE</div>
        <h1 style="margin:8px 0 8px;">CLAT \u2014 Common Law Admission Test</h1>
        <p class="sub">The single national entrance test for admission to India\u2019s National Law Universities \u2014 undergraduate and postgraduate law programmes.</p>
        <div class="ca-level-grid" style="margin-top:22px;">${cards}</div>
      </section>`;
  }

  function levelOverview(key){
    var l = LEVELS[key];
    if(!l) return overview();
    var sections = [
      { key:'about', icon:'📋', title:'Overview & Eligibility', desc:'What this exam is for, who can apply, career options and important dates.' },
      { key:'pattern', icon:'📝', title:'Exam Pattern & Syllabus', desc:'Sections, marking scheme and topics tested.' },
      { key:'nlus', icon:'🏛️', title:'NLU Explorer', desc:'Participating NLUs, rankings and rank bands.' }
    ];
    var cardsHTML = sections.map(function(s){
      return '<button class="upsc-module" type="button" data-clat-section="'+key+':'+s.key+'"><div class="i">'+s.icon+'</div><h3>'+s.title+'</h3><p>'+s.desc+'</p></button>';
    }).join('');
    return back('CLAT Overview', 'overview') + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">CLAT</div>
        <h2>${l.icon} ${l.name}</h2>
        <p class="sub">${l.sub}</p>
        <div class="upsc-grid" style="margin-top:22px;">${cardsHTML}</div>
      </section>`;
  }

  function sectionDetail(key, section){
    var l = LEVELS[key];
    if(!l) return overview();
    var title = '', body = '';

    if(section === 'about'){
      title = 'Overview & Eligibility';
      var dateRows = l.dates.map(function(d){ return '<tr><td><b>'+d[0]+'</b></td><td>'+d[1]+'</td></tr>'; }).join('');
      body = '<div class="ca-detail-block"><div class="ca-step-label">Overview</div><div class="ca-step-card">'+l.overview+'</div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">Eligibility</div><div class="ca-step-card">'+l.eligibility+'</div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">Career Options</div><div class="ca-step-card">'+chipList(l.career)+'</div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">Important Dates</div><div class="ca-step-card">'+
          '<div style="overflow:auto;"><table class="mba-cutoff-table"><thead><tr><th>Milestone</th><th>Typical Timing</th></tr></thead><tbody>'+dateRows+'</tbody></table></div>'+
          '<div class="ca-step-note" style="margin-top:10px;">Dates shift slightly each cycle \u2014 always confirm against the current year\u2019s official Consortium notification before advising a student on deadlines.</div>'+
        '</div></div>';
    } else if(section === 'pattern'){
      title = 'Exam Pattern & Syllabus';
      var subjRows = l.subjects.map(function(s){
        return '<div class="ca-detail-block"><div class="ca-step-label">'+s.name+'</div><div class="ca-step-card">'+s.desc+'</div></div>';
      }).join('');
      body = '<div class="ca-detail-block"><div class="ca-step-label">Exam Pattern</div><div class="ca-step-card">'+l.pattern+'</div></div>' + subjRows;
    } else if(section === 'nlus'){
      title = 'NLU Explorer';
      var nluRows = l.nlus.map(function(n){ return '<tr><td><b>'+n[0]+'</b></td><td>'+n[1]+'</td><td>'+n[2]+'</td></tr>'; }).join('');
      var predictorHTML = '';
      if(l.rankPredictor){
        var predRows = l.rankPredictor.rows.map(function(r){ return '<tr><td><span class="mba-cutoff-badge">'+r[0]+'</span></td><td>'+r[1]+'</td></tr>'; }).join('');
        predictorHTML = '<div class="ca-detail-block"><div class="ca-step-label">'+l.rankPredictor.title+'</div><div class="ca-step-card">'+
          '<div style="overflow:auto;"><table class="mba-cutoff-table"><thead><tr><th>CLAT PG Rank Range</th><th>Likely NLU</th></tr></thead><tbody>'+predRows+'</tbody></table></div>'+
          '<div class="ca-step-note" style="margin-top:10px;">'+l.rankPredictor.note+'</div>'+
        '</div></div>';
      }
      body = predictorHTML + '<div class="ca-detail-block"><div class="ca-step-label">Participating NLUs</div><div class="ca-step-card">'+
        '<div style="overflow:auto;"><table class="mba-cutoff-table"><thead><tr><th>NLU</th><th>NIRF Law Rank</th><th>Notes</th></tr></thead><tbody>'+nluRows+'</tbody></table></div>'+
        '<div class="ca-step-note" style="margin-top:10px;">'+l.nluNote+'</div></div></div>';
    }

    return back(l.name, key) + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">${l.name.toUpperCase()}</div>
        <h2>${title}</h2>
        ${body}
      </section>`;
  }

  function bind(){
    var r = root();
    if(!r) return;
    r.querySelectorAll('[data-clat-open]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-clat-open')); };
    });
    r.querySelectorAll('[data-clat-section]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-clat-section')); };
    });
    r.querySelectorAll('[data-clat-back]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-clat-back')); };
    });
  }

  function render(view){
    var r = root();
    if(!r) return;
    r.style.display = 'block';
    if(view && view.indexOf(':') > -1){
      var parts = view.split(':');
      r.innerHTML = sectionDetail(parts[0], parts[1]);
    } else if(view && LEVELS[view]){
      r.innerHTML = levelOverview(view);
    } else {
      r.innerHTML = overview();
    }
    bind();
  }

  var previousOpenCategory = window.cidOpenCategory;
  window.cidOpenCategory = function(name){
    if(name === 'CLAT'){
      document.body.classList.remove('cid-home-mode');
      document.body.classList.add('cid-category-mode');
      if(typeof window.cidRenderCategorySidebar === 'function'){
        window.cidRenderCategorySidebar('CLAT', 'Law Entrance', [
          {key:'overview', label:'CLAT Overview'},
          {key:'ug', label:'CLAT UG'},
          {key:'pg', label:'CLAT PG'}
        ], 'overview', function(key){
          for(var i=0;i<2;i++){
            var backBtn = document.querySelector('[data-clat-back]');
            if(backBtn) backBtn.click();
          }
          if(key !== 'overview'){
            var openBtn = document.querySelector('[data-clat-open="'+key+'"]');
            if(openBtn) openBtn.click();
          }
          window.cidSetSidebarActive(key);
        });
      }
      var home = document.getElementById('cid-category-home');
      if(home) home.style.display = 'none';
      var topbar = document.querySelector('.cid-category-topbar');
      if(topbar){
        topbar.style.display = 'flex';
        var label = topbar.querySelector('.cid-current-category');
        if(label) label.textContent = 'CLAT';
      }
      render('overview');
      return;
    }
    if(typeof previousOpenCategory === 'function') return previousOpenCategory(name);
  };
})();
