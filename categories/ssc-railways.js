// Category module extracted from index.html.

(function(){
  function root(){ return document.getElementById('pageRoot'); }
  function back(label, target){ return '<button class="cid-back" type="button" data-sr-back="'+target+'" style="margin-top:22px;">← Back to '+label+'</button>'; }

  function overview(){
    return `
      <section class="upsc-section" style="margin-top:28px;">
        <div class="cid-kicker">SSC + RAILWAYS INTELLIGENCE</div>
        <h1 style="margin:8px 0 8px;">SSC & Railway Government Jobs</h1>
        <p class="sub">Two of India's largest government recruiters. Pick one to see every major exam under it.</p>
        <div class="ca-level-grid" style="margin-top:22px;">
          <button type="button" class="ca-level-card" data-sr-open="ssc">
            <span class="ca-level-icon">📝</span>
            <b>SSC</b>
            <span>9 exams — CGL to RPF</span>
            <em>Explore →</em>
          </button>
          <button type="button" class="ca-level-card" data-sr-open="railway">
            <span class="ca-level-icon">🚆</span>
            <b>Railway</b>
            <span>5 exams — NTPC to Paramedical</span>
            <em>Explore →</em>
          </button>
        </div>
      </section>`;
  }

  var SSC_EXAMS = [
    { key:'cgl', icon:'🎓', name:'SSC CGL', sub:'Combined Graduate Level',
      edu:'Bachelor\u2019s (any stream)', age:'18\u201332 (post-wise)',
      stages:['Tier 1 \u2013 CBT','Tier 2 \u2013 CBT (final)'],
      topics:['Quant','English','Reasoning','GA','Statistics (JSO)','Finance (AAO)'],
      marking:'T1: +2/\u22120.5 \u00b7 T2: \u22121 (varies)',
      cutoff:'Tier 1 UR: 2025 \u2013 137 \u00b7 2024 \u2013 153 (out of 200)',
      salary:'\u20b925,500\u2013\u20b91,51,100 (Level 4\u20138)',
      posts:['Inspector','ASO','Auditor','Accountant','SI (CBI/NIA)'],
      note:'No interview \u2014 Tier 2 decides selection.' },
    { key:'chsl', icon:'📄', name:'SSC CHSL', sub:'Combined Higher Secondary Level',
      edu:'12th pass', age:'18\u201327',
      stages:['Tier 1 \u2013 CBT','Tier 2 \u2013 CBT + Skill/Typing'],
      topics:['Quant','English','Reasoning','GA','Computer'],
      marking:'Negative marking (objective sections)',
      cutoff:'Tier 1 UR: ~145\u2013155 (2023\u201324 range, LDC/JSA)',
      salary:'LDC/JSA ~\u20b924,000 \u00b7 DEO ~\u20b942,000 (in-hand)',
      posts:['LDC/JSA','DEO','Postal Assistant'] },
    { key:'mts', icon:'🧹', name:'SSC MTS & Havaldar', sub:'Multi Tasking Staff',
      edu:'10th pass', age:'18\u201327',
      stages:['CBT (2 sessions)','PET/PST (Havaldar only)'],
      topics:['Numerical Ability','Reasoning','GA','English'],
      marking:'Negative marking (varies by cycle)',
      cutoff:'Varies by session \u2014 no single fixed figure; check current notification',
      salary:'~\u20b920,000\u201323,000 in-hand',
      posts:['Peon','Daftary','Watchman','Havaldar (CBIC)'] },
    { key:'gd', icon:'🛡️', name:'SSC GD Constable', sub:'General Duty',
      edu:'10th pass', age:'18\u201323',
      stages:['CBT','PET','PST','Medical + DV'],
      topics:['Reasoning','GK & Science','Maths','English/Hindi'],
      marking:'~1/4 negative marking',
      cutoff:'Varies sharply by state/zone \u2014 no single figure (recent Gen range roughly 130\u2013155)',
      salary:'~\u20b930,000\u201336,000 in-hand',
      posts:['BSF','CRPF','CISF','ITBP','SSB','Assam Rifles'] },
    { key:'je', icon:'🛠️', name:'SSC JE', sub:'Junior Engineer',
      edu:'Diploma/Degree Engg', age:'18\u201332 (dept-wise)',
      stages:['Paper 1 \u2013 CBT (objective)','Paper 2 \u2013 CBT (descriptive)'],
      topics:['Reasoning','GA','General Engineering'],
      marking:'Negative marking in Paper 1',
      cutoff:'Varies by discipline/zone \u2014 check the current notification',
      salary:'~\u20b944,000\u201352,000 in-hand (Level 6)',
      posts:['CPWD','MES','BRO','CWC'] },
    { key:'cpo', icon:'👮', name:'SSC CPO', sub:'Central Police Organisation',
      edu:'Bachelor\u2019s degree', age:'20\u201325',
      stages:['Paper 1 \u2013 CBT','PET/PST','Paper 2 \u2013 CBT (English)','Medical + DV'],
      topics:['Reasoning','GA','Quant','English'],
      marking:'Negative marking in both papers',
      cutoff:'Varies by zone \u2014 check the current notification',
      salary:'~\u20b945,000\u201354,000 in-hand (SI)',
      posts:['SI \u2013 Delhi Police','CAPFs'] },
    { key:'steno', icon:'✍️', name:'SSC Stenographer', sub:'Grade C & Grade D',
      edu:'12th pass', age:'18\u201327',
      stages:['CBT','Stenography Skill Test'],
      topics:['Reasoning','GA','English','Stenography'],
      marking:'Negative marking in CBT',
      cutoff:'Varies by grade/zone \u2014 check the current notification',
      salary:'Grade D ~\u20b932,000\u201338,000 \u00b7 Grade C ~\u20b944,000\u201352,000',
      posts:['Steno Grade C','Steno Grade D'] },
    { key:'selpost', icon:'🗂️', name:'SSC Selection Post', sub:'Multi-level Phase exam',
      edu:'10th/12th/Diploma/Grad (post-wise)', age:'Post-wise',
      stages:['Single CBT per Phase'],
      topics:['Reasoning','GA','Quant','English'],
      marking:'Standard SSC-style negative marking',
      cutoff:'Varies heavily \u2014 separate cutoff per post & phase',
      salary:'Varies by post (Pay Level 1\u20137)',
      posts:['Isolated Group B/C posts \u2014 changes each phase'] },
    { key:'rpf', icon:'🚨', name:'RPF Constable & SI', sub:'Railway Protection Force',
      edu:'Constable: 10th \u00b7 SI: Bachelor\u2019s', age:'Constable 18\u201323 \u00b7 SI 20\u201328',
      stages:['CBT','PET','PMT','DV + Medical'],
      topics:['GA & Science','Arithmetic','Reasoning'],
      marking:'\u22121/3 per wrong answer',
      cutoff:'New SSC-run format \u2014 no prior cutoff yet; earlier RRB-run cycles were ~90\u2013130 (Gen, Constable CBT)',
      salary:'Constable ~\u20b933,000\u201339,000 \u00b7 SI ~\u20b945,000+ in-hand',
      posts:['RPF Constable','RPF Sub-Inspector'],
      note:'Since Oct 2025: conducted by SSC, not RRB.' }
  ];

  var RAILWAY_EXAMS = [
    { key:'ntpc', icon:'🎫', name:'RRB NTPC', sub:'Non-Technical Popular Categories',
      edu:'UG: 12th \u00b7 Graduate: Bachelor\u2019s', age:'UG 18\u201333 \u00b7 Grad 18\u201336',
      stages:['CBT 1','CBT 2','Typing/CBAT (post-wise)','DV + Medical'],
      topics:['GA','Maths','Reasoning'],
      marking:'\u22121/3 per wrong answer',
      cutoff:'Zone-wise (21 RRBs) \u2014 no national figure. Qualifying: ~40% Gen/EWS, 30% OBC/SC, 25% ST (CBT1)',
      salary:'~\u20b929,000\u2013\u20b955,000+ (post-wise)',
      posts:['Goods Guard','Clerk','Station Master','Commercial Apprentice'] },
    { key:'groupd', icon:'🔧', name:'RRB Group D', sub:'Level 1 posts',
      edu:'10th pass / ITI', age:'18\u201336',
      stages:['CBT','PET','DV + Medical'],
      topics:['Maths','Reasoning','Science','GA'],
      marking:'\u22121/3 per wrong answer',
      cutoff:'Zone-wise \u2014 no national figure. Recent Gen \u201csafe score\u201d ~70+ (out of 100)',
      salary:'~\u20b926,000\u201329,000 in-hand (Level 1)',
      posts:['Track Maintainer','Helper','Pointsman'] },
    { key:'je', icon:'📐', name:'RRB JE', sub:'Junior Engineer',
      edu:'Diploma/Degree Engineering', age:'~18\u201333',
      stages:['CBT 1','CBT 2 (4 sections)','DV'],
      topics:['Maths','Reasoning','Science','Technical'],
      marking:'\u22121/3 per wrong answer',
      cutoff:'Zone-wise \u2014 check the specific RRB zone\u2019s cutoff',
      salary:'\u20b935,400\u2013\u20b91,12,400 (Level 6)',
      posts:['JE \u2013 Civil/Mech/Elec/Electronics'] },
    { key:'alp', icon:'🚂', name:'RRB ALP & Technician', sub:'Assistant Loco Pilot',
      edu:'10th+ITI or Diploma/Degree Engg', age:'~18\u201330',
      stages:['CBT 1','CBT 2 (Part A+B)','CBAT (ALP only)','DV'],
      topics:['Maths','Reasoning','Science','Trade Subject'],
      marking:'\u22121/3 (CBT1 & Part A)',
      cutoff:'Zone-wise \u2014 qualifying ~40% Gen, 30% OBC/SC, 25% ST (CBT1)',
      salary:'~\u20b935,000 in-hand (Level 2)',
      posts:['ALP','Technician Gr I/II/III'] },
    { key:'para', icon:'⚕️', name:'RRB Paramedical', sub:'Staff Nurse, Lab Tech, Pharmacist',
      edu:'Relevant diploma/degree (role-wise)', age:'Post-wise',
      stages:['CBT (varies by post)'],
      topics:['Professional subject','GA','Science'],
      marking:'Standard RRB-style (~1/3)',
      cutoff:'Varies by post/zone \u2014 see Pharma \u2192 Govt Vacancies for Pharmacist specifics',
      salary:'Varies by role/qualification',
      posts:['Staff Nurse','Lab Technician','Pharmacist'],
      note:'Pharmacist details already in Pharma \u2192 Govt Vacancies.' }
  ];

  function examListing(list, title, icon, kicker, groupKey){
    var cards = list.map(function(e){
      return '<button type="button" class="exam-icon-card" data-sr-exam="'+groupKey+':'+e.key+'">'+
        '<span class="exam-icon">'+e.icon+'</span>'+
        '<b>'+e.name+'</b>'+
        '<span>'+e.sub+'</span>'+
        '<em>Explore →</em>'+
      '</button>';
    }).join('');
    return back('SSC + Railways Overview', 'overview') + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">${kicker}</div>
        <h2>${icon} ${title}</h2>
        <p class="sub">Tap an exam for a quick, visual breakdown.</p>
        <div class="exam-icon-grid" style="margin-top:22px;">${cards}</div>
      </section>`;
  }

  function examDetail(groupKey, key){
    var list = groupKey === 'ssc' ? SSC_EXAMS : RAILWAY_EXAMS;
    var e = list.filter(function(x){ return x.key === key; })[0];
    if(!e) return overview();
    var backLabel = groupKey === 'ssc' ? 'SSC' : 'Railway';
    var stagesHTML = e.stages.map(function(s, i){
      return (i>0 ? '<span class="exam-stage-arrow">→</span>' : '') + '<span class="exam-stage-chip">'+s+'</span>';
    }).join('');
    var topicsHTML = e.topics.map(function(t){ return '<span class="ca-topic-chip">'+t+'</span>'; }).join('');
    var postsHTML = e.posts.map(function(t){ return '<span class="ca-topic-chip">'+t+'</span>'; }).join('');
    var noteHTML = e.note ? '<div class="exam-note-short">'+e.note+'</div>' : '';

    return back(backLabel, groupKey) + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">${backLabel.toUpperCase()}</div>
        <h2>${e.icon} ${e.name}</h2>
        <p class="sub">${e.sub}</p>

        <div class="exam-fact-row">
          <div class="exam-fact"><span class="exam-fact-label">Education</span><span class="exam-fact-value">${e.edu}</span></div>
          <div class="exam-fact"><span class="exam-fact-label">Age</span><span class="exam-fact-value">${e.age}</span></div>
          <div class="exam-fact"><span class="exam-fact-label">Salary</span><span class="exam-fact-value">${e.salary}</span></div>
        </div>

        <div class="exam-block-label">Stages</div>
        <div class="exam-stage-flow">${stagesHTML}</div>

        <div class="exam-block-label">Topics</div>
        <div class="ca-topic-chips">${topicsHTML}</div>

        <div class="exam-block-label">Marking</div>
        <div class="exam-marking-badge">${e.marking}</div>

        <div class="exam-block-label">Cutoff (Last 2 Years)</div>
        <div class="exam-marking-badge" style="background:#EAF0FF;color:#2952E3;">${e.cutoff}</div>

        <div class="exam-block-label">Posts</div>
        <div class="ca-topic-chips">${postsHTML}</div>

        ${noteHTML}
      </section>`;
  }

  function bind(){
    var r = root();
    if(!r) return;
    r.querySelectorAll('[data-sr-open]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-sr-open')); };
    });
    r.querySelectorAll('[data-sr-exam]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-sr-exam')); };
    });
    r.querySelectorAll('[data-sr-back]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-sr-back')); };
    });
  }

  function render(view){
    var r = root();
    if(!r) return;
    r.style.display = 'block';
    if(view === 'ssc') r.innerHTML = examListing(SSC_EXAMS, 'SSC \u2014 Staff Selection Commission', '📝', 'SSC EXAMS', 'ssc');
    else if(view === 'railway') r.innerHTML = examListing(RAILWAY_EXAMS, 'Railway \u2014 RRB / RRC', '🚆', 'RAILWAY EXAMS', 'rail');
    else if(view && view.indexOf(':') > -1){
      var parts = view.split(':');
      r.innerHTML = examDetail(parts[0], parts[1]);
    }
    else r.innerHTML = overview();
    bind();
  }

  var previousOpenCategory = window.cidOpenCategory;
  window.cidOpenCategory = function(name){
    if(name === 'SSC + Railways'){
      document.body.classList.remove('cid-home-mode');
      document.body.classList.add('cid-category-mode');
      if(typeof window.cidRenderCategorySidebar === 'function'){
        window.cidRenderCategorySidebar('SSC + Railways', 'Government Jobs', [
          {key:'overview', label:'SSC + Railways Overview'},
          {key:'ssc', label:'SSC'},
          {key:'railway', label:'Railway'}
        ], 'overview', function(key){
          for(var i=0;i<2;i++){
            var backBtn = document.querySelector('[data-sr-back]');
            if(backBtn) backBtn.click();
          }
          if(key !== 'overview'){
            var openBtn = document.querySelector('[data-sr-open="'+key+'"]');
            if(openBtn) openBtn.click();
          }
          window.cidSetSidebarActive(key);
        });
      } else if(typeof renderSidebar === 'function') renderSidebar();
      var home = document.getElementById('cid-category-home');
      if(home) home.style.display = 'none';
      var topbar = document.querySelector('.cid-category-topbar');
      if(topbar){
        topbar.style.display = 'flex';
        var label = topbar.querySelector('.cid-current-category');
        if(label) label.textContent = 'SSC + Railways';
      }
      render('overview');
      return;
    }
    if(typeof previousOpenCategory === 'function') return previousOpenCategory(name);
  };
})();
