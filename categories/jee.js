// Category module extracted from index.html.

(function(){
  function root(){ return document.getElementById('pageRoot'); }

  var JEE_CUTOFF_COLS = [
    {key:'general', label:'General'},
    {key:'ews', label:'EWS'},
    {key:'obc', label:'OBC-NCL'},
    {key:'sc', label:'SC'},
    {key:'st', label:'ST'}
  ];
  // NTA-declared JEE Main qualifying percentile for JEE Advanced eligibility
  var JEE_CUTOFF_MAIN_ROWS = [
    ['2025','93.10','80.38','79.43','61.15','47.90'],
    ['2024','93.24','81.33','79.68','60.09','46.70'],
    ['2023','90.78','75.62','73.61','51.98','37.23']
  ];
  // JEE Advanced minimum aggregate marks to enter the Common Rank List (source: IIT Kanpur/JoSAA official releases)
  var JEE_CUTOFF_ADV_ROWS = [
    ['2025','76','66','66','37','37'],
    ['2024','109','98','98','54','54'],
    ['2023','86','77','77','43','43']
  ];

  function jeeCutoffTable(rows){
    var head = '<tr><th>Year</th>' + JEE_CUTOFF_COLS.map(function(c){return '<th data-cat="'+c.key+'">'+c.label+'</th>';}).join('') + '</tr>';
    var body = rows.map(function(r){
      return '<tr><td>'+r[0]+'</td>' + JEE_CUTOFF_COLS.map(function(c,i){
        return '<td data-cat="'+c.key+'"><span class="mba-cutoff-badge">'+r[i+1]+'</span></td>';
      }).join('') + '</tr>';
    }).join('');
    return '<table class="mba-cutoff-table"><thead>'+head+'</thead><tbody>'+body+'</tbody></table>';
  }

  function applyJeeCutoffHighlight(){
    var sel = document.getElementById('jeeCutoffCatSelect');
    if(!sel) return;
    var val = sel.value;
    document.querySelectorAll('#jeeCutoffTableWrap [data-cat]').forEach(function(cell){
      if(!val) cell.classList.remove('jee-col-highlight');
      else cell.classList.toggle('jee-col-highlight', cell.getAttribute('data-cat') === val);
    });
  }

  function collegesRankView(){
    var iitRows = [
      ['Up to ~70','IIT Bombay CSE — closing rank 66 (General, 2025 final round)'],
      ['~70 – 130','IIT Delhi CSE — closing rank 126'],
      ['~130 – 200','IIT Madras CSE — closing rank 171'],
      ['~200 – 300','IIT Kanpur CSE — closing rank 270'],
      ['~300 – 500','IIT Kharagpur CSE — closing rank 450'],
      ['~500 – 800','IIT Roorkee CSE — closing rank 535'],
      ['800 – 3,000','Older IITs (Guwahati, Hyderabad, Indore, BHU Varanasi) CSE/ECE; top-5 IITs — other core branches'],
      ['3,000 – 8,000','Newer IITs (Bhubaneswar, Gandhinagar, Ropar, Patna, Jodhpur, Mandi, Indore) CSE/ECE'],
      ['8,000+','Newer/peripheral IITs (Bhilai, Goa, Jammu, Dharwad, Palakkad, Tirupati) — most branches']
    ];
    var josaaRows = [
      ['Up to ~1,200','IIIT Hyderabad CSE, top IIIT CSE seats','Extremely competitive; near JEE Advanced qualifying range.'],
      ['~1,500 – 6,000','NIT Trichy / Warangal / Surathkal — CSE (OS quota)','Top NITs, CSE/allied branches at Other-State quota.'],
      ['~6,000 – 10,000','NIT Calicut, MNIT Allahabad — CSE; top NITs — ECE','Strong NIT options, CSE at slightly newer NITs or ECE at top ones.'],
      ['~15,000 – 40,000','Newer NITs CSE/ECE (HS quota), IIIT Hyderabad ECE, mid IIITs CSE','Home-State quota opens up meaningfully better options at this range.'],
      ['~40,000 – 80,000','NIT core branches (Mechanical/Civil), IIITs, strong GFTIs','Core branches at NITs and IT-focused GFTIs become realistic.'],
      ['80,000+','GFTIs, newer/peripheral NITs and IIITs (branch-dependent)','Options exist but branch and college depend heavily on category/quota.']
    ];
    var iitTrs = iitRows.map(function(r){return '<tr><td><span class="mba-cutoff-badge">'+r[0]+'</span></td><td>'+r[1]+'</td></tr>';}).join('');
    var josaaTrs = josaaRows.map(function(r){return '<tr><td><span class="mba-cutoff-badge">'+r[0]+'</span></td><td>'+r[1]+'</td><td>'+r[2]+'</td></tr>';}).join('');
    return `
      <h3 class="neet-section-title" style="margin-top:4px;">IITs — via JEE Advanced Rank (CSE reference, 2025 final round, General/Open)</h3>
      <div style="overflow:auto;">
      <table class="mba-cutoff-table">
        <thead><tr><th>AIR Range</th><th>Typical IITs (CSE reference)</th></tr></thead>
        <tbody>${iitTrs}</tbody>
      </table>
      </div>
      <div class="upsc-note" style="margin-top:14px;margin-bottom:26px;"><b>Note:</b> Bands are anchored to actual 2025 JoSAA final-round CSE closing ranks (Bombay 66, Delhi 126, Madras 171, Kanpur 270, Kharagpur 450, Roorkee 535). Other branches at the same IIT close at much higher (easier) ranks — this table shows relative IIT tiering, not a branch guarantee.</div>

      <h3 class="neet-section-title">NITs / IIITs / GFTIs — via JEE Main Rank (AIR)</h3>
      <div style="overflow:auto;">
      <table class="mba-cutoff-table">
        <thead><tr><th>AIR Range</th><th>Typical Colleges / Branches</th><th>Counselling Guidance</th></tr></thead>
        <tbody>${josaaTrs}</tbody>
      </table>
      </div>
      <div class="upsc-note" style="margin-top:20px;"><b>Counsellor note:</b> Closing ranks shift every year and differ sharply by category, Home-State vs Other-State quota, gender-neutral vs female-only seats, and JoSAA round. Treat these bands as directional — always cross-check the latest JoSAA round-wise closing ranks for the specific student's category and home state before final guidance.</div>
    `;
  }

  function collegesMarksView(){
    var rows = [
      ['270+','~AIR under 500 (JEE Advanced)','Top IITs — CSE at Bombay/Delhi/Madras/Kanpur/Kharagpur'],
      ['230 – 270','~AIR 500 – 3,000 (JEE Advanced)','Other IITs CSE/ECE; top-5 IITs — core branches'],
      ['180 – 230','~AIR 3,000 – 15,000 (JEE Main percentile ~99+)','Newer IITs; top NIT CSE (OS quota)'],
      ['140 – 180','~AIR 15,000 – 40,000','Top NIT core branches, mid-NIT CSE, IIIT Hyderabad ECE'],
      ['90 – 140','~AIR 40,000 – 80,000','NIT core branches, strong IIITs/GFTIs'],
      ['Below 90','~AIR 80,000+','GFTIs, newer/peripheral NITs and IIITs (branch-dependent)']
    ];
    var trs = rows.map(function(r){return '<tr><td><span class="mba-cutoff-badge">'+r[0]+'</span></td><td>'+r[1]+'</td><td>'+r[2]+'</td></tr>';}).join('');
    return `
      <div class="mba-cutoff-summary" style="margin-bottom:14px;"><b>Reading this view</b><div style="margin-top:6px;color:#607086">JEE Main is out of 300. Marks-to-rank conversion shifts every year with exam difficulty and session-wise normalisation — use this only as a rough, directional read. IIT admission depends on JEE Advanced (a separate exam/rank), not JEE Main marks directly.</div></div>
      <div style="overflow:auto;">
      <table class="mba-cutoff-table">
        <thead><tr><th>JEE Main Marks (/300)</th><th>Indicative AIR Band</th><th>Typical Colleges / Branches</th></tr></thead>
        <tbody>${trs}</tbody>
      </table>
      </div>
      <div class="upsc-note" style="margin-top:20px;"><b>Counsellor note:</b> Treat marks-based bands as a rough first read only — always convert to percentile/rank using the current year's official NTA score-to-percentile data before advising a student.</div>
    `;
  }

  function overview(){
    return `
      <section class="upsc-section" style="margin-top:28px;">
        <div class="cid-kicker">JEE INTELLIGENCE</div>
        <h1 style="margin:8px 0 8px;">JEE Intelligence</h1>
        <p class="sub">Engineering entrance guidance covering exam pattern, syllabus, cut-offs, colleges and admissions.</p>

        <div class="entrance-grid" style="margin-top:22px;">
          <button type="button" class="entrance-card" data-jee-open="exam">
            <span class="entrance-icon">📝</span>
            <b>Exam Guide</b>
            <span>JEE Main & Advanced exam details and paper pattern.</span>
            <em>Explore →</em>
          </button>

          <button type="button" class="entrance-card" data-jee-open="syllabus">
            <span class="entrance-icon">📚</span>
            <b>Subjects & Syllabus</b>
            <span>Physics, Chemistry and Mathematics topic-wise coverage.</span>
            <em>Explore →</em>
          </button>

          <button type="button" class="entrance-card" data-jee-open="cutoff">
            <span class="entrance-icon">📊</span>
            <b>Cut-off Trends</b>
            <span>Category-wise qualifying percentile — last 3 years.</span>
            <em>Explore →</em>
          </button>

          <button type="button" class="entrance-card" data-jee-open="colleges">
            <span class="entrance-icon">🏫</span>
            <b>Colleges</b>
            <span>What rank gets you where — NITs, IIITs and GFTIs.</span>
            <em>Explore →</em>
          </button>

          <button type="button" class="entrance-card" data-jee-open="results">
            <span class="entrance-icon">🏆</span>
            <b>Results & Success Stories</b>
            <span>Results, rank outcomes and student success stories.</span>
            <em>Explore →</em>
          </button>
        </div>
      </section>`;
  }

  function back(){ return '<button class="cid-back" type="button" data-jee-back style="margin-top:22px;">← Back to JEE Overview</button>'; }
  function info(a,b){ return '<div><span>'+a+'</span><b>'+b+'</b></div>'; }
  function box(a,b,c){ return '<div class="neet-info-card"><b>'+a+'</b><p><strong>'+b+'</strong><br>'+c+'</p></div>'; }

  function exam(){
    return back() + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">JEE EXAM GUIDE</div>
        <h2>JEE Main &amp; JEE Advanced — Complete Exam Guide</h2>
        <p class="sub">A counsellor-friendly overview of both stages leading to engineering admissions.</p>

        <h3 class="neet-section-title">JEE Main</h3>
        <div class="neet-highlight">
          ${info('Conducting body','NTA')}
          ${info('Mode','Computer-based test')}
          ${info('Sessions','2 per year (Jan &amp; Apr)')}
          ${info('Subjects','Physics, Chemistry, Maths')}
          ${info('Duration','180 minutes')}
        </div>

        <h3 class="neet-section-title">JEE Main — Paper Pattern (B.E./B.Tech — Paper 1)</h3>
        <div class="neet-info-grid">
          ${box('Physics','20 MCQ + 10 Numerical (attempt 5)','Concept and application-based questions.')}
          ${box('Chemistry','20 MCQ + 10 Numerical (attempt 5)','Physical, Organic and Inorganic Chemistry.')}
          ${box('Mathematics','20 MCQ + 10 Numerical (attempt 5)','Calculation and concept-heavy problems.')}
        </div>

        <h3 class="neet-section-title">Marking Structure</h3>
        <div class="neet-info-grid">
          ${box('MCQ correct','+4 marks','Each correct MCQ adds four marks.')}
          ${box('MCQ incorrect','−1 mark','One mark deducted for a wrong MCQ.')}
          ${box('Numerical (attempted)','+4 / 0','No negative marking on numerical-value questions.')}
        </div>

        <h3 class="neet-section-title">JEE Advanced</h3>
        <p style="color:#5f6d80;font-size:13.5px;line-height:1.6;margin-bottom:10px;">Only the top ~2,50,000 JEE Main qualifiers (across categories) are eligible to appear. Required for admission to the IITs.</p>
        <div class="neet-info-grid">
          ${box('Papers','Paper 1 + Paper 2 (both compulsory)','Objective, multi-type questions across PCM.')}
          ${box('Marking scheme','Varies by question type','Includes partial marking on some question types.')}
          ${box('Outcome','JoSAA counselling','Determines IIT branch/campus allotment by rank.')}
        </div>

        <div class="upsc-note" style="margin-top:20px;"><b>Counsellor note:</b> JEE Main's exact question mix and marking have changed across recent cycles — confirm against the current official NTA information bulletin before advising students.</div>
      </section>`;
  }

  function syllabus(){
    return back() + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">JEE SUBJECTS &amp; SYLLABUS</div>
        <h2>Subjects &amp; Syllabus</h2>
        <p class="sub">Physics, Chemistry and Mathematics — topic clusters commonly tested across JEE Main and Advanced.</p>

        <h3 class="neet-section-title">Physics</h3>
        <div class="neet-info-grid">
          ${box('Mechanics','Kinematics, Laws of Motion, Work-Energy-Power, Rotational Motion','Consistently high-weightage cluster.')}
          ${box('Electricity & Magnetism','Current Electricity, Electrostatics, Magnetic Effects','Strong overlap with numerical-heavy questions.')}
          ${box('Modern Physics & Optics','Atoms, Nuclei, Semiconductors, Ray &amp; Wave Optics','Frequently tested in JEE Advanced.')}
        </div>

        <h3 class="neet-section-title">Chemistry</h3>
        <div class="neet-info-grid">
          ${box('Physical Chemistry','Mole concept, Thermodynamics, Equilibrium, Electrochemistry','Calculation-intensive; high scoring with practice.')}
          ${box('Organic Chemistry','GOC, Hydrocarbons, Named Reactions, Biomolecules','Reaction-mechanism based questions.')}
          ${box('Inorganic Chemistry','Periodic Table, Chemical Bonding, Coordination Compounds','Largely NCERT-based; memory-driven.')}
        </div>

        <h3 class="neet-section-title">Mathematics</h3>
        <div class="neet-info-grid">
          ${box('Algebra & Calculus','Quadratic Equations, Sequences, Limits, Differentiation, Integration','Largest weightage across both papers.')}
          ${box('Coordinate Geometry & Vectors','Straight Lines, Conic Sections, 3D Geometry, Vectors','Regular presence in every cycle.')}
          ${box('Trigonometry & Probability','Trigonometric Equations, Permutations, Probability, Statistics','Shorter but scoring topics.')}
        </div>

        <div class="upsc-note" style="margin-top:20px;"><b>Counsellor note:</b> Chapter-wise weightage shifts slightly each cycle — cross-check against the latest official NTA syllabus PDF for the active session.</div>
      </section>`;
  }

  function cutoff(){
    return back() + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">JEE CUT-OFF TRENDS</div>
        <h2 id="jeeCutoffTitle">JEE Main — Category-wise Qualifying Percentile</h2>
        <p class="sub" id="jeeCutoffSub">Minimum percentile required to qualify for JEE Advanced eligibility, last 3 years.</p>

        <div class="jee-tabbar">
          <button type="button" class="jee-tab-btn active" data-jee-cutoff-view="main">JEE Main</button>
          <button type="button" class="jee-tab-btn" data-jee-cutoff-view="advanced">JEE Advanced</button>
          <span class="jee-cat-select-wrap">
            <label for="jeeCutoffCatSelect">Highlight category:</label>
            <select id="jeeCutoffCatSelect">
              <option value="">All</option>
              <option value="general">General</option>
              <option value="ews">EWS</option>
              <option value="obc">OBC-NCL</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
            </select>
          </span>
        </div>

        <div class="mba-cutoff-summary" id="jeeCutoffSummary"><b>Reading this table</b><div style="margin-top:6px;color:#607086" id="jeeCutoffSummaryText">These are NTA-declared qualifying percentiles for JEE Advanced eligibility — not JoSAA admission cut-offs, which are rank-based and vary by college/branch (see the Colleges tab).</div></div>

        <div style="overflow:auto;" id="jeeCutoffTableWrap">${jeeCutoffTable(JEE_CUTOFF_MAIN_ROWS)}</div>

        <div class="upsc-note" style="margin-top:20px;" id="jeeCutoffNote"><b>Counsellor note:</b> General category cut-off has trended upward each cycle (90.78 → 93.24 → 93.10). Verify the current year's official NTA notification before final guidance.</div>
      </section>`;
  }

  function colleges(){
    return back() + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">JEE COLLEGES</div>
        <h2>What Your Rank Can Realistically Get You</h2>
        <p class="sub">Illustrative bands based on recent JoSAA closing-rank trends — cross-check current year data before advising.</p>

        <div class="jee-tabbar">
          <button type="button" class="jee-tab-btn active" data-jee-college-view="rank">By Rank (AIR)</button>
          <button type="button" class="jee-tab-btn" data-jee-college-view="marks">By Marks (JEE Main /300)</button>
        </div>

        <div id="jeeCollegeTableWrap">${collegesRankView()}</div>
      </section>`;
  }

  function results(){
    return back() + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">JEE RESULTS</div>
        <h2>Results &amp; Success Stories</h2>
        <p class="sub">Reserved for verified results, rank outcomes and student success stories — to be added.</p>
      </section>`;
  }

  function bind(){
    var r = root();
    if(!r) return;

    r.querySelectorAll('[data-jee-open]').forEach(function(btn){
      btn.onclick = function(){
        render(this.getAttribute('data-jee-open'));
      };
    });

    r.querySelectorAll('[data-jee-back]').forEach(function(btn){
      btn.onclick = function(){ render('overview'); };
    });

    var cutoffTabs = r.querySelectorAll('[data-jee-cutoff-view]');
    if(cutoffTabs.length){
      cutoffTabs.forEach(function(btn){
        btn.onclick = function(){
          cutoffTabs.forEach(function(b){ b.classList.remove('active'); });
          this.classList.add('active');
          var view = this.getAttribute('data-jee-cutoff-view');
          var wrap = document.getElementById('jeeCutoffTableWrap');
          var title = document.getElementById('jeeCutoffTitle');
          var sub = document.getElementById('jeeCutoffSub');
          var note = document.getElementById('jeeCutoffNote');
          var summaryText = document.getElementById('jeeCutoffSummaryText');
          if(view === 'advanced'){
            wrap.innerHTML = jeeCutoffTable(JEE_CUTOFF_ADV_ROWS);
            title.textContent = 'JEE Advanced — Category-wise Minimum Qualifying Marks (Aggregate)';
            sub.textContent = 'Minimum aggregate marks required to enter the Common Rank List, last 3 years.';
            if(summaryText) summaryText.textContent = 'These are the minimum aggregate marks (across both papers) needed to enter the JEE Advanced Common Rank List and become eligible for JoSAA counselling into IITs \u2014 a separate, higher bar than the JEE Main qualifying percentile above.';
            note.innerHTML = '<b>Counsellor note:</b> JEE Advanced 2025 cut-offs dropped sharply from 2024 (General: 109 \u2192 76 aggregate marks) as that year\'s paper was tougher. Marks are aggregate across both papers \u2014 verify the current year\u2019s official IIT-organised notification before final guidance.';
          } else {
            wrap.innerHTML = jeeCutoffTable(JEE_CUTOFF_MAIN_ROWS);
            title.textContent = 'JEE Main — Category-wise Qualifying Percentile';
            sub.textContent = 'Minimum percentile required to qualify for JEE Advanced eligibility, last 3 years.';
            if(summaryText) summaryText.textContent = 'These are NTA-declared qualifying percentiles for JEE Advanced eligibility \u2014 not JoSAA admission cut-offs, which are rank-based and vary by college/branch (see the Colleges tab).';
            note.innerHTML = '<b>Counsellor note:</b> General category cut-off has trended upward each cycle (90.78 \u2192 93.24 \u2192 93.10). Verify the current year\'s official NTA notification before final guidance.';
          }
          applyJeeCutoffHighlight();
        };
      });
    }

    var catSelect = document.getElementById('jeeCutoffCatSelect');
    if(catSelect){ catSelect.onchange = applyJeeCutoffHighlight; }

    var collegeTabs = r.querySelectorAll('[data-jee-college-view]');
    if(collegeTabs.length){
      collegeTabs.forEach(function(btn){
        btn.onclick = function(){
          collegeTabs.forEach(function(b){ b.classList.remove('active'); });
          this.classList.add('active');
          var view = this.getAttribute('data-jee-college-view');
          var wrap = document.getElementById('jeeCollegeTableWrap');
          wrap.innerHTML = (view === 'marks') ? collegesMarksView() : collegesRankView();
        };
      });
    }
  }

  function render(view){
    var r = root();
    if(!r) return;
    r.style.display = 'block';
    if(view === 'exam') r.innerHTML = exam();
    else if(view === 'syllabus') r.innerHTML = syllabus();
    else if(view === 'cutoff') r.innerHTML = cutoff();
    else if(view === 'colleges') r.innerHTML = colleges();
    else if(view === 'results') r.innerHTML = results();
    else r.innerHTML = overview();
    bind();
  }

  /* Chain safely: only handle JEE here, defer everything else (NEET, UPSC, MBA, CSIR-NET, IIT-JAM)
     to whatever cidOpenEntrance already does. Nothing above this is modified. */
  var previousOpen = window.cidOpenEntrance;
  window.cidOpenEntrance = function(name){
    if(name === 'JEE'){
      document.body.classList.remove('cid-home-mode');
      document.body.classList.add('cid-category-mode');
      if(typeof window.cidRenderCategorySidebar === 'function'){
        window.cidRenderCategorySidebar('JEE', 'Engineering Entrance', [
          {key:'overview', label:'JEE Overview'},
          {key:'exam', label:'Exam Guide'},
          {key:'syllabus', label:'Subjects & Syllabus'},
          {key:'cutoff', label:'Cut-off Trends'},
          {key:'colleges', label:'Colleges'},
          {key:'results', label:'Results & Success Stories'}
        ], 'overview', function(key){
          var backBtn = document.querySelector('[data-jee-back]');
          if(backBtn) backBtn.click();
          if(key !== 'overview'){
            var openBtn = document.querySelector('[data-jee-open="'+key+'"]');
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
        if(label) label.textContent = 'JEE';
      }
      render('overview');
      return;
    }
    if(typeof previousOpen === 'function') return previousOpen(name);
  };
})();
