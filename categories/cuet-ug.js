// Category module extracted from index.html.

(function(){
  function root(){ return document.getElementById('pageRoot'); }
  function back(label, target){ return '<button class="cid-back" type="button" data-cug-back="'+target+'" style="margin-top:22px;">← Back to '+label+'</button>'; }

  var CUETUG_SECTIONS = [
    { key:'exam', icon:'📋', title:'Exam Pattern & Eligibility', desc:'Sections, marking scheme, eligibility and frequency.' },
    { key:'subjects', icon:'📚', title:'Subjects & Domains', desc:'Languages, domain subjects and the General Test.' },
    { key:'cutoff', icon:'📊', title:'Cutoff Trends', desc:'How CUET UG cutoffs actually work \u2014 and why NTA doesn\u2019t set one.' },
    { key:'universities', icon:'🏛️', title:'Universities & Career', desc:'Participating universities and what the score is used for.' }
  ];

  function overview(){
    var cards = CUETUG_SECTIONS.map(function(s){
      return '<button class="upsc-module" type="button" data-cug-section="'+s.key+'"><div class="i">'+s.icon+'</div><h3>'+s.title+'</h3><p>'+s.desc+'</p></button>';
    }).join('');
    return `
      <section class="upsc-section" style="margin-top:28px;">
        <div class="cid-kicker">CUET UG INTELLIGENCE</div>
        <h1 style="margin:8px 0 8px;">CUET UG \u2014 Common University Entrance Test</h1>
        <p class="sub">NTA\u2019s single national entrance test for undergraduate admission to 280+ universities, including every central university.</p>
        <div class="upsc-grid" style="margin-top:22px;">${cards}</div>
      </section>`;
  }

  function sectionDetail(section){
    var body = '', title = '';
    if(section === 'exam'){
      title = 'Exam Pattern & Eligibility';
      body =
        '<div class="ca-detail-block"><div class="ca-step-label">Conducting Body & Mode</div><div class="ca-step-card">National Testing Agency (NTA), Computer-Based Test (CBT), conducted once a year (typically May\u2013June) across multiple days and shifts.</div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">Eligibility</div><div class="ca-step-card">12th pass (or appearing) from any recognised board. Most participating universities require 45\u201350% aggregate for admission (this is a university-admission requirement, not a CUET exam-eligibility gate) \u2014 5% relaxation typically applies for SC/ST/OBC.</div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">Sections</div><div class="ca-step-card">Section IA (Language, choice of 13), Section IB (an additional Language, choice of 20, optional), Section II (Domain-specific subjects \u2014 choose up to 6 from 23), Section III (General Test \u2014 required by some universities, optional for others). Each subject paper has 50 MCQs.</div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">Marking Scheme</div><div class="ca-step-card"><span class="exam-marking-badge">+5 correct, \u22121 wrong, 0 unattempted</span><div class="ca-step-note" style="margin-top:8px;">Maximum 200 marks per subject/domain paper.</div></div></div>';
    } else if(section === 'subjects'){
      title = 'Subjects & Domains';
      body =
        '<div class="ca-detail-block"><div class="ca-step-label">Section IA \u2014 Languages (choose 1 of 13)</div><div class="ca-step-card"><div class="ca-topic-chips">'+['Hindi','English','Marathi','Gujarati','Tamil','Telugu','Kannada','Malayalam','Bengali','Punjabi','Odia','Assamese','Urdu'].map(function(t){return '<span class="ca-topic-chip">'+t+'</span>';}).join('')+'</div></div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">Section II \u2014 Domain Subjects (choose up to 6 of 23)</div><div class="ca-step-card"><div class="ca-topic-chips">'+['Accountancy','Biology/Biological Studies','Business Studies','Chemistry','Computer Science/Informatics Practices','Economics/Business Economics','Physics','Mathematics','History','Geography','Political Science','Sociology','Psychology','Home Science','Environmental Science','Agriculture','Fine Arts/Visual Arts'].map(function(t){return '<span class="ca-topic-chip">'+t+'</span>';}).join('')+'</div><div class="ca-step-note" style="margin-top:8px;">Reduced from 27 to 23 subjects in 2026 \u2014 a few discontinued subjects (e.g. Entrepreneurship, Legal Studies, Fashion Studies) are now covered via the General Test instead. Students can now choose a domain subject they didn\u2019t study in Class 12.</div></div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">Section III \u2014 General Test</div><div class="ca-step-card"><div class="ca-topic-chips">'+['General Knowledge & Current Affairs','Numerical Ability','Quantitative Reasoning','Logical & Analytical Reasoning','General Science & Environmental Literacy'].map(function(t){return '<span class="ca-topic-chip">'+t+'</span>';}).join('')+'</div></div></div>';
    } else if(section === 'cutoff'){
      title = 'Cutoff Trends';
      body =
        '<div class="ca-detail-block"><div class="ca-step-card">NTA does <b>not</b> release a central CUET UG cutoff \u2014 it only provides raw scores, percentiles and an All India Rank. Each of the 280+ participating universities releases its own course-wise and category-wise cutoff separately, based on its own seat matrix, applicant pool and normalisation of that year\u2019s scores.<div class="ca-step-note" style="margin-top:10px;">This is the single most important thing to tell a student: a \u201cgood CUET score\u201d only means something once matched against the specific university + course they\u2019re targeting. Always point students to that university\u2019s own counselling portal (e.g. DU\u2019s CSAS, JNU\u2019s CUET-based admission) for the actual cutoff, rather than quoting a generic number.</div></div></div>';
    } else if(section === 'universities'){
      title = 'Universities & Career';
      body =
        '<div class="ca-detail-block"><div class="ca-step-label">Participating Universities</div><div class="ca-step-card">280+ universities accept CUET UG scores, including <b>all central universities</b> (Delhi University, JNU, BHU, Jamia Millia Islamia, Aligarh Muslim University, and more), plus many State, Deemed and Private universities.</div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">What It Replaced</div><div class="ca-step-card">Since 2022, Class 12 board percentages are no longer used for central university UG admission \u2014 CUET UG score is what matters. A student with a lower board percentage but a stronger CUET score will be preferred over the reverse.</div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">Career Pathways</div><div class="ca-step-card">One CUET UG score is usable across hundreds of universities and programmes \u2014 Arts, Science, Commerce, Management and more \u2014 removing the need to prepare for or sit multiple separate university entrance tests.</div></div>';
    }
    return back('CUET UG', 'overview') + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">CUET UG</div>
        <h2>${title}</h2>
        ${body}
      </section>`;
  }

  function bind(){
    var r = root();
    if(!r) return;
    r.querySelectorAll('[data-cug-section]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-cug-section')); };
    });
    r.querySelectorAll('[data-cug-back]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-cug-back')); };
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
    if(name === 'CUET UG'){
      document.body.classList.remove('cid-home-mode');
      document.body.classList.add('cid-category-mode');
      if(typeof window.cidRenderCategorySidebar === 'function'){
        window.cidRenderCategorySidebar('CUET UG', 'Undergraduate Entrance', [
          {key:'overview', label:'CUET UG Overview'},
          {key:'exam', label:'Exam Pattern & Eligibility'},
          {key:'subjects', label:'Subjects & Domains'},
          {key:'cutoff', label:'Cutoff Trends'},
          {key:'universities', label:'Universities & Career'}
        ], 'overview', function(key){
          var backBtn = document.querySelector('[data-cug-back]');
          if(backBtn) backBtn.click();
          if(key !== 'overview'){
            var openBtn = document.querySelector('[data-cug-section="'+key+'"]');
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
        if(label) label.textContent = 'CUET UG';
      }
      render('overview');
      return;
    }
    if(typeof previousOpenCategory === 'function') return previousOpenCategory(name);
  };
})();
