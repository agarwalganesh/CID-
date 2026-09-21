// Category module extracted from index.html.

(function(){
  function root(){ return document.getElementById('pageRoot'); }
  function back(label, target){ return '<button class="cid-back" type="button" data-cpg-back="'+target+'" style="margin-top:22px;">← Back to '+label+'</button>'; }

  var CUETPG_SECTIONS = [
    { key:'exam', icon:'📋', title:'Exam Pattern & Eligibility', desc:'Format, marking scheme, eligibility and frequency.' },
    { key:'subjects', icon:'📚', title:'Subjects & Domains', desc:'Domain-specific PG papers and general papers.' },
    { key:'cutoff', icon:'📊', title:'Cutoff Trends', desc:'How CUET PG cutoffs work \u2014 and why NTA doesn\u2019t set one.' },
    { key:'universities', icon:'🏛️', title:'Universities & Career', desc:'Participating universities and what the score is used for.' }
  ];

  function overview(){
    var cards = CUETPG_SECTIONS.map(function(s){
      return '<button class="upsc-module" type="button" data-cpg-section="'+s.key+'"><div class="i">'+s.icon+'</div><h3>'+s.title+'</h3><p>'+s.desc+'</p></button>';
    }).join('');
    return `
      <section class="upsc-section" style="margin-top:28px;">
        <div class="cid-kicker">CUET PG INTELLIGENCE</div>
        <h1 style="margin:8px 0 8px;">CUET PG \u2014 Common University Entrance Test (PG)</h1>
        <p class="sub">NTA\u2019s single national entrance test for postgraduate admission to 190+ universities, including every central university.</p>
        <div class="upsc-grid" style="margin-top:22px;">${cards}</div>
      </section>`;
  }

  function sectionDetail(section){
    var body = '', title = '';
    if(section === 'exam'){
      title = 'Exam Pattern & Eligibility';
      body =
        '<div class="ca-detail-block"><div class="ca-step-label">Conducting Body & Mode</div><div class="ca-step-card">National Testing Agency (NTA), Computer-Based Test (CBT), conducted once a year (typically March) across multiple days and shifts.</div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">Eligibility</div><div class="ca-step-card">Bachelor\u2019s degree (any discipline) or final year appearing. <b>No upper age limit.</b> Most universities require 50% aggregate in the qualifying degree (45% for SC/ST/OBC/PwD) \u2014 this is a university-admission requirement, not a CUET exam-eligibility gate.</div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">Pattern</div><div class="ca-step-card">Single paper per subject/domain \u2014 <b>75 MCQs in 90 minutes</b> (about 1.2 minutes per question). Candidates choose the domain paper(s) matching the PG programme they want to apply for.</div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">Marking Scheme</div><div class="ca-step-card"><span class="exam-marking-badge">+4 correct, \u22121 wrong, 0 unattempted</span><div class="ca-step-note" style="margin-top:8px;">Exact marks-per-question have varied slightly across cycles \u2014 confirm from the current year\u2019s official NTA bulletin before advising a student.</div></div></div>';
    } else if(section === 'subjects'){
      title = 'Subjects & Domains';
      body =
        '<div class="ca-detail-block"><div class="ca-step-label">Domain-specific PG Papers</div><div class="ca-step-card"><div class="ca-topic-chips">'+['Political Science','Economics','Physics','Chemistry','Mathematics','Commerce','Management','Computer Science','English','Hindi','History','Sociology','Psychology','Life Sciences','Law','Social Work','Education','Geography'].map(function(t){return '<span class="ca-topic-chip">'+t+'</span>';}).join('')+'</div><div class="ca-step-note" style="margin-top:8px;">Each subject is a separate 75-question paper based on undergraduate-level knowledge of that discipline.</div></div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">General Papers (some universities)</div><div class="ca-step-card"><div class="ca-topic-chips">'+['General Reasoning','Language/Comprehension','General Awareness'].map(function(t){return '<span class="ca-topic-chip">'+t+'</span>';}).join('')+'</div></div></div>';
    } else if(section === 'cutoff'){
      title = 'Cutoff Trends';
      body =
        '<div class="ca-detail-block"><div class="ca-step-card">Like CUET UG, NTA does <b>not</b> release a central CUET PG cutoff \u2014 it only provides raw scores and rank. Each of the 190+ participating universities (53 Central, 42 State, 15 Deemed, 80+ Private, plus 1 international \u2014 Kathmandu University) runs its <b>own decentralised counselling</b> and releases its own course-wise, category-wise merit list/cutoff.<div class="ca-step-note" style="margin-top:10px;">JNU, DU and BHU typically release their first PG merit list in late May/early June. Always direct students to the specific university\u2019s own admission portal rather than quoting one generic cutoff figure.</div></div></div>';
    } else if(section === 'universities'){
      title = 'Universities & Career';
      body =
        '<div class="ca-detail-block"><div class="ca-step-label">Participating Universities</div><div class="ca-step-card">190+ universities accept CUET PG scores \u2014 53 Central universities (DU, JNU, BHU, Jamia, University of Hyderabad, and more), 42 State, 15 Deemed, 80+ Private, plus 1 international university (Kathmandu University).</div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">What It Replaced</div><div class="ca-step-card">Since 2022, most individual university-specific PG entrance tests (e.g. the old JNUEE) have been merged into CUET PG \u2014 one exam now feeds admission across all of them, rather than a student needing to sit separate tests per university.</div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">Career Pathways</div><div class="ca-step-card">Gateway to Master\u2019s programmes across disciplines at India\u2019s top central universities \u2014 a common next step after a CUET UG-admitted (or any) undergraduate degree, feeding into further research (PhD/NET) or professional careers.</div></div>';
    }
    return back('CUET PG', 'overview') + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">CUET PG</div>
        <h2>${title}</h2>
        ${body}
      </section>`;
  }

  function bind(){
    var r = root();
    if(!r) return;
    r.querySelectorAll('[data-cpg-section]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-cpg-section')); };
    });
    r.querySelectorAll('[data-cpg-back]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-cpg-back')); };
    });
  }

  function render(view){
    var r = root();
    if(!r) return;
    r.style.display = 'block';
    r.innerHTML = (view && view !== 'overview') ? sectionDetail(view) : overview();
    bind();
  }

  var previousOpenCategory = window.cidOpenCategory;
  window.cidOpenCategory = function(name){
    if(name === 'CUET PG'){
      document.body.classList.remove('cid-home-mode');
      document.body.classList.add('cid-category-mode');
      if(typeof window.cidRenderCategorySidebar === 'function'){
        window.cidRenderCategorySidebar('CUET PG', 'Postgraduate Entrance', [
          {key:'overview', label:'CUET PG Overview'},
          {key:'exam', label:'Exam Pattern & Eligibility'},
          {key:'subjects', label:'Subjects & Domains'},
          {key:'cutoff', label:'Cutoff Trends'},
          {key:'universities', label:'Universities & Career'}
        ], 'overview', function(key){
          var backBtn = document.querySelector('[data-cpg-back]');
          if(backBtn) backBtn.click();
          if(key !== 'overview'){
            var openBtn = document.querySelector('[data-cpg-section="'+key+'"]');
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
        if(label) label.textContent = 'CUET PG';
      }
      render('overview');
      return;
    }
    if(typeof previousOpenCategory === 'function') return previousOpenCategory(name);
  };
})();
