// Category module extracted from index.html.

(function(){
  function root(){ return document.getElementById('pageRoot'); }

  function overview(){
    return `
      <section class="upsc-section" style="margin-top:28px;">
        <div class="cid-kicker">NEET INTELLIGENCE</div>
        <h1 style="margin:8px 0 8px;">NEET Intelligence</h1>
        <p class="sub">Medical entrance guidance covering exam pattern, syllabus, cut-offs, colleges, admissions and results.</p>

        <div class="entrance-grid" style="margin-top:22px;">
          <button type="button" class="entrance-card" data-neet-open="exam">
            <span class="entrance-icon">📝</span>
            <b>Exam Guide</b>
            <span>Exam pattern, subjects, marking scheme and complete exam journey.</span>
            <em>Explore →</em>
          </button>

          <button type="button" class="entrance-card" data-neet-open="syllabus">
            <span class="entrance-icon">📚</span>
            <b>Subjects & Syllabus</b>
            <span>Physics, Chemistry and Biology topic-wise coverage.</span>
            <em>Explore →</em>
          </button>

          <button type="button" class="entrance-card" data-neet-open="cutoff">
            <span class="entrance-icon">📊</span>
            <b>Cut-off Trends</b>
            <span>Year-wise qualifying and admission trend guidance.</span>
            <em>Explore →</em>
          </button>

          <button type="button" class="entrance-card" data-neet-open="colleges">
            <span class="entrance-icon">🏫</span>
            <b>Colleges</b>
            <span>Medical colleges, counselling and admission guidance.</span>
            <em>Explore →</em>
          </button>

          <button type="button" class="entrance-card" data-neet-open="results">
            <span class="entrance-icon">🏆</span>
            <b>Results & Success Stories</b>
            <span>Results, rank outcomes and student success stories.</span>
            <em>Explore →</em>
          </button>
        </div>
      </section>`;
  }

  function exam(){
    return `
      <button class="cid-back" type="button" data-neet-back style="margin-top:22px;">← Back to NEET Overview</button>
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">NEET EXAM GUIDE</div>
        <h2>NEET (UG) — Complete Exam Guide</h2>
        <p class="sub">A counsellor-friendly overview of the exam pattern, subjects, marking scheme and admission journey.</p>

        <div class="neet-highlight">
          <div><span>EXAM</span><b>NEET (UG)</b></div>
          <div><span>CONDUCTING BODY</span><b>NTA</b></div>
          <div><span>TOTAL QUESTIONS</span><b>180</b></div>
          <div><span>TOTAL MARKS</span><b>720</b></div>
          <div><span>DURATION</span><b>180 minutes</b></div>
        </div>

        <h3 class="neet-section-title">Paper Pattern & Subject Split</h3>
        <div class="neet-info-grid">
          <div class="neet-info-card"><b>Physics</b><p><strong>45 questions • 180 marks</strong><br>Concept-based numerical and application questions.</p></div>
          <div class="neet-info-card"><b>Chemistry</b><p><strong>45 questions • 180 marks</strong><br>Physical, Organic and Inorganic Chemistry coverage.</p></div>
          <div class="neet-info-card"><b>Biology</b><p><strong>90 questions • 360 marks</strong><br>Botany + Zoology; highest weightage in the paper.</p></div>
        </div>

        <h3 class="neet-section-title">Marking Structure</h3>
        <div class="neet-info-grid">
          <div class="neet-info-card"><b>Correct answer</b><p><strong>+4 marks</strong><br>Each correct answer adds four marks.</p></div>
          <div class="neet-info-card"><b>Incorrect answer</b><p><strong>−1 mark</strong><br>One mark is deducted for an incorrect answer.</p></div>
          <div class="neet-info-card"><b>Unattempted</b><p><strong>0 marks</strong><br>No marks are added or deducted.</p></div>
        </div>

        <h3 class="neet-section-title">Student Journey</h3>
        <div class="neet-info-grid">
          <div class="neet-info-card"><b>1. Preparation</b><p><strong>NCERT + concepts + practice</strong><br>Build fundamentals and revise regularly.</p></div>
          <div class="neet-info-card"><b>2. NEET Exam</b><p><strong>720-mark examination</strong><br>Performance creates the score and rank position.</p></div>
          <div class="neet-info-card"><b>3. Result & Rank</b><p><strong>Score → rank</strong><br>Merit position drives counselling possibilities.</p></div>
          <div class="neet-info-card"><b>4. Counselling & College</b><p><strong>Choice filling → seat allocation</strong><br>Allocation depends on rank, category, choices and applicable rules.</p></div>
        </div>

        <div class="upsc-note" style="margin-top:20px;"><b>Counsellor note:</b> Current official NEET information bulletin remains the final authority for the active exam cycle.</div>
      </section>`;
  }

  function placeholder(title){
    return `
      <button class="cid-back" type="button" data-neet-back style="margin-top:22px;">← Back to NEET Overview</button>
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">NEET MODULE</div>
        <h2>${title}</h2>
        <p class="sub">This section is ready for detailed NEET content.</p>
      </section>`;
  }

  function bind(){
    var r = root();
    if(!r) return;

    r.querySelectorAll('[data-neet-open]').forEach(function(btn){
      btn.onclick = function(){
        var key = this.getAttribute('data-neet-open');
        if(key === 'exam') render('exam');
        else {
          var names = {
            syllabus:'Subjects & Syllabus',
            cutoff:'Cut-off Trends',
            colleges:'Colleges',
            results:'Results & Success Stories'
          };
          render(key, names[key]);
        }
      };
    });

    r.querySelectorAll('[data-neet-back]').forEach(function(btn){
      btn.onclick = function(){ render('overview'); };
    });
  }

  function render(view, title){
    var r = root();
    if(!r) return;
    r.style.display = 'block';
    if(view === 'overview') r.innerHTML = overview();
    else if(view === 'exam') r.innerHTML = exam();
    else r.innerHTML = placeholder(title || 'NEET');
    bind();
  }

  /* Final NEET route — intentionally only overrides NEET.
     MBA and UPSC routes are not changed. */
  var previousOpen = window.cidOpenEntrance;
  window.cidOpenEntrance = function(name){
    if(name === 'NEET'){
      document.body.classList.remove('cid-home-mode');
      document.body.classList.add('cid-category-mode');
      if(typeof window.cidRenderCategorySidebar === 'function'){
        window.cidRenderCategorySidebar('NEET', 'Medical Entrance', [
          {key:'overview', label:'NEET Overview'},
          {key:'exam', label:'Exam Guide'},
          {key:'syllabus', label:'Subjects & Syllabus'},
          {key:'cutoff', label:'Cut-off Trends'},
          {key:'colleges', label:'Colleges'},
          {key:'results', label:'Results & Success Stories'}
        ], 'overview', function(key){
          var backBtn = document.querySelector('[data-neet-back]');
          if(backBtn) backBtn.click();
          if(key !== 'overview'){
            var openBtn = document.querySelector('[data-neet-open="'+key+'"]');
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
        if(label) label.textContent = 'NEET';
      }
      render('overview');
      return;
    }
    if(typeof previousOpen === 'function') return previousOpen(name);
  };

  /* Ensure clicking the NEET category card always opens the NEET overview. */
  document.addEventListener('click', function(e){
    var card = e.target.closest && e.target.closest('.cid-category-card');
    if(card && /\bNEET\b/.test(card.innerText || '')){
      e.preventDefault();
      e.stopImmediatePropagation();
      window.cidOpenEntrance('NEET');
    }
  }, true);
})();
(function(){
  function cleanCategoryHome(){
    var home = document.getElementById('cid-category-home');
    var root = document.getElementById('pageRoot');
    if(!home || !root) return;
    // Only remove the mistakenly auto-rendered NEET dashboard from the category selection screen.
    if(getComputedStyle(home).display !== 'none'){
      root.innerHTML = '';
      root.style.display = 'none';
    }
  }

  // Prevent the old auto-start behaviour from leaving NEET Intelligence below the category cards.
  document.addEventListener('DOMContentLoaded', function(){ setTimeout(cleanCategoryHome, 0); });
  window.addEventListener('load', function(){ setTimeout(cleanCategoryHome, 150); });

  // Keep category home clean whenever "All Categories" is used.
  var oldGoHome = window.cidGoHome;
  window.cidGoHome = function(){
    if(typeof oldGoHome === 'function') oldGoHome();
    setTimeout(cleanCategoryHome, 0);
  };
})();
(function(){
  function R(){return document.getElementById('pageRoot');}
  function back(){return '<button class="cid-back" type="button" data-neet-back style="margin-top:22px;">← Back to NEET Overview</button>';}
  function syllabus(){return back()+`<section class="upsc-section" style="margin-top:18px;">
    <div class="cid-kicker">NEET SUBJECTS & SYLLABUS</div><h2>Subject-wise Syllabus & Most Important Topics</h2>
    <p class="sub">Use these cards for quick counselling conversations. Topics are high-priority preparation areas; students should still follow the current official syllabus and NCERT.</p>
    <div class="neet-subject-grid">
      <article class="neet-subject-card"><div class="subject-num">01 · PHYSICS</div><h3>Physics</h3><p>45 questions · 180 marks · Focus on concepts, formulas and repeated numerical practice.</p><div class="neet-topic-list"><span class="neet-topic-chip hot">Mechanics</span><span class="neet-topic-chip hot">Current Electricity</span><span class="neet-topic-chip">Electrostatics</span><span class="neet-topic-chip">Magnetism</span><span class="neet-topic-chip hot">Ray Optics</span><span class="neet-topic-chip">Wave Optics</span><span class="neet-topic-chip hot">Modern Physics</span><span class="neet-topic-chip">Semiconductors</span><span class="neet-topic-chip">Thermodynamics</span><span class="neet-topic-chip">SHM & Waves</span></div></article>
      <article class="neet-subject-card"><div class="subject-num">02 · CHEMISTRY</div><h3>Chemistry</h3><p>45 questions · 180 marks · Balance NCERT retention with reaction, concept and numerical practice.</p><div class="neet-topic-list"><span class="neet-topic-chip hot">Chemical Bonding</span><span class="neet-topic-chip hot">Equilibrium</span><span class="neet-topic-chip">Thermodynamics</span><span class="neet-topic-chip hot">Electrochemistry</span><span class="neet-topic-chip">Coordination Compounds</span><span class="neet-topic-chip hot">GOC</span><span class="neet-topic-chip">Hydrocarbons</span><span class="neet-topic-chip hot">Biomolecules</span><span class="neet-topic-chip">Periodic Table</span><span class="neet-topic-chip">p-Block</span></div></article>
      <article class="neet-subject-card"><div class="subject-num">03 · BIOLOGY</div><h3>Biology</h3><p>90 questions · 360 marks · Highest weightage; NCERT line-by-line revision is critical.</p><div class="neet-topic-list"><span class="neet-topic-chip hot">Human Physiology</span><span class="neet-topic-chip hot">Genetics & Evolution</span><span class="neet-topic-chip">Cell Biology</span><span class="neet-topic-chip hot">Human Reproduction</span><span class="neet-topic-chip">Biotechnology</span><span class="neet-topic-chip hot">Ecology</span><span class="neet-topic-chip">Plant Physiology</span><span class="neet-topic-chip">Biological Classification</span><span class="neet-topic-chip">Morphology & Anatomy</span><span class="neet-topic-chip">Biology in Human Welfare</span></div></article>
    </div>
    <div class="upsc-note" style="margin-top:20px;"><b>Counselling focus:</b> Identify the student's weakest subject first, then check whether the issue is concepts, NCERT retention, speed, or question selection.</div>
  </section>`;}
  const data={
    2026:{'UR / EWS':['50th percentile','715–213'],'OBC':['40th percentile','212–177'],'SC':['40th percentile','212–177'],'ST':['40th percentile','212–177'],'UR / EWS-PwBD':['45th percentile','212–194'],'OBC-PwBD':['40th percentile','193–177'],'SC-PwBD':['40th percentile','193–177'],'ST-PwBD':['40th percentile','191–177']},
    2025:{'UR / EWS':['50th percentile','686–144'],'OBC':['40th percentile','143–113'],'SC':['40th percentile','143–113'],'ST':['40th percentile','143–113'],'UR / EWS-PwBD':['45th percentile','143–127'],'OBC-PwBD':['40th percentile','126–113'],'SC-PwBD':['40th percentile','126–113'],'ST-PwBD':['40th percentile','126–113']},
    2024:{'UR / EWS':['50th percentile','720–162'],'OBC':['40th percentile','161–127'],'SC':['40th percentile','161–127'],'ST':['40th percentile','161–127'],'UR / EWS-PwBD':['45th percentile','161–144'],'OBC-PwBD':['40th percentile','143–127'],'SC-PwBD':['40th percentile','143–127'],'ST-PwBD':['40th percentile','142–127']},
    2023:{'UR / EWS':['50th percentile','720–137'],'OBC':['40th percentile','136–107'],'SC':['40th percentile','136–107'],'ST':['40th percentile','136–107'],'UR / EWS-PwBD':['45th percentile','136–121'],'OBC-PwBD':['40th percentile','120–107'],'SC-PwBD':['40th percentile','120–107'],'ST-PwBD':['40th percentile','120–108']}
  };
  function rows(year,cat){let cats=cat==='All Categories'?Object.keys(data[year]):[cat];return cats.map(c=>`<tr><td>${c}</td><td>${data[year][c][0]}</td><td>${data[year][c][1]}</td></tr>`).join('');}
  function cutoff(){return back()+`<section class="upsc-section" style="margin-top:18px;">
    <div class="cid-kicker">NEET CUT-OFF MADE SIMPLE</div>
    <h2>Understand NEET Cut-offs Without Confusion</h2>
    <p class="sub">There are two different numbers students commonly call “cut-off”. One is to qualify NEET; the other is related to getting an MBBS seat.</p>

    <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin:22px 0;">
      <div class="neet-cutoff-summary" style="margin:0;">
        <span style="display:block;font-size:11px;letter-spacing:1px;font-weight:800;color:#61718a;">STEP 1</span>
        <b>Qualifying Cut-off</b>
        <p style="margin:8px 0 0;color:#5f6f84;line-height:1.55;">This tells you whether you have qualified NEET based on percentile. Qualifying NEET does <b>not</b> mean a Government MBBS seat is guaranteed.</p>
      </div>
      <div class="neet-cutoff-summary" style="margin:0;">
        <span style="display:block;font-size:11px;letter-spacing:1px;font-weight:800;color:#61718a;">STEP 2</span>
        <b>Admission Closing Cut-off</b>
        <p style="margin:8px 0 0;color:#5f6f84;line-height:1.55;">This shows the score/rank level at which seats closed in counselling. It changes by college, quota, category and counselling round.</p>
      </div>
    </div>

    <div class="neet-cutoff-summary" style="margin-top:10px;">
      <span style="display:block;font-size:11px;letter-spacing:1px;font-weight:800;color:#61718a;">AIQ EXPLAINED</span>
      <b>AIQ = All India Quota</b>
      <p style="margin:8px 0 0;color:#5f6f84;line-height:1.55;">For Government medical colleges, AIQ seats are competed for at the national level. State quota counselling is separate and can have very different closing ranks.</p>
    </div>

    <h3 style="margin:28px 0 8px;color:#2d3f58;">🏥 AIQ MBBS Admission Closing Trend — Round 1</h3>
    <p class="sub" style="margin-bottom:12px;">Year select karo aur category-wise AIQ Round 1 closing AIR + marks dekho. Ye Government MBBS AIQ benchmark hai.</p>

    <div class="neet-cutoff-toolbar" style="margin-bottom:16px;">
      <select id="aiqRoundYear" class="neet-select">
        <option value="2026">2026</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
      </select>
    </div>

    <div class="neet-cutoff-summary" style="margin-top:0;">
      <span style="display:block;font-size:11px;letter-spacing:1px;font-weight:800;color:#61718a;">SELECTED YEAR · MCC AIQ ROUND 1</span>
      <b id="aiqRoundHeadline">2026 AIQ MBBS Closing Benchmark — Round 1</b>
    </div>

    <div style="overflow-x:auto;">
      <table class="neet-cutoff-table">
        <thead><tr><th>CATEGORY</th><th>CLOSING AIR</th><th>APPROX. SCORE</th></tr></thead>
        <tbody id="aiqRoundRows"></tbody>
      </table>
    </div>

    <div class="neet-cutoff-summary" style="margin-top:18px;background:linear-gradient(135deg,#f8fbff,#f3f7ff);border:1px solid #cfd9e8;">
      <span style="display:block;font-size:11px;letter-spacing:1px;font-weight:800;color:#61718a;margin-bottom:8px;">💡 HOW TO UNDERSTAND THIS TABLE</span>
      <b style="font-size:18px;display:block;color:#2d3f58;">Marks → AIR → College Possibility</b>
      <p style="margin:10px 0 0;color:#52647c;line-height:1.65;">Is table ko college guarantee ke liye nahi, <b>counselling benchmark</b> ke liye use karo. Sabse pehle apne marks dekho, phir approximate AIR samjho, aur uske baad apni category ke closing benchmark se compare karo.</p>
      <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:16px;">
        <div style="padding:14px;border:1px solid #d8e0ec;border-radius:12px;background:#fff;">
          <span style="font-size:11px;font-weight:800;color:#61718a;letter-spacing:.8px;">STEP 1</span>
          <b style="display:block;margin-top:5px;color:#2d3f58;">Your NEET Marks</b>
          <span style="display:block;margin-top:4px;font-size:13px;color:#61718a;">Apna actual score dekho.</span>
        </div>
        <div style="padding:14px;border:1px solid #d8e0ec;border-radius:12px;background:#fff;">
          <span style="font-size:11px;font-weight:800;color:#61718a;letter-spacing:.8px;">STEP 2</span>
          <b style="display:block;margin-top:5px;color:#2d3f58;">Your AIR</b>
          <span style="display:block;margin-top:4px;font-size:13px;color:#61718a;">Marks se rank har year change hoti hai.</span>
        </div>
        <div style="padding:14px;border:1px solid #d8e0ec;border-radius:12px;background:#fff;">
          <span style="font-size:11px;font-weight:800;color:#61718a;letter-spacing:.8px;">STEP 3</span>
          <b style="display:block;margin-top:5px;color:#2d3f58;">Compare Benchmark</b>
          <span style="display:block;margin-top:4px;font-size:13px;color:#61718a;">Category-wise AIQ closing AIR dekho.</span>
        </div>
      </div>
      <div style="margin-top:16px;padding:14px 16px;border-left:4px solid #5877b5;background:#fff;border-radius:10px;color:#455b78;line-height:1.6;">
        <b style="color:#2d3f58;">Example:</b> Agar table me <b>General / UR · Closing AIR 22,342 · Around 572 marks</b> likha hai, iska matlab ye nahi ki exactly 572 marks par har Government MBBS college mil jayega. Ye sirf us selected year ke <b>AIQ Round 1 closing benchmark</b> ko show karta hai. Actual allotment college, category, choices, seat availability aur counselling round par depend karega.
      </div>
      <div style="margin-top:12px;font-size:13px;color:#66768c;line-height:1.55;">⚠️ <b>Important:</b> Marks sirf rough reference hain. Counselling ke liye <b>AIR ko primary comparison</b> rakho, kyunki same marks par different years me AIR change ho sakti hai.</div>
    </div>


    <h3 style="margin:30px 0 8px;color:#2d3f58;">🎯 Qualifying Cut-off — Year-wise</h3>
    <p class="sub">Select an exam year and category. This is only the NEET qualifying cut-off.</p>

    <div class="neet-cutoff-toolbar">
      <select id="neetCutoffYear" class="neet-select"><option value="2026">2026</option><option value="2025">2025</option><option value="2024">2024</option><option value="2023">2023</option></select>
      <select id="neetCutoffCategory" class="neet-select"><option>All Categories</option>${Object.keys(data[2026]).map(c=>'<option>'+c+'</option>').join('')}</select>
    </div>

    <div class="neet-cutoff-summary">
      <span style="display:block;font-size:11px;letter-spacing:1px;font-weight:800;color:#61718a;">SELECTED YEAR</span>
      <b id="neetCutoffHeadline">2026 NEET (UG) Qualifying Cut-off</b>
    </div>

    <table class="neet-cutoff-table">
      <thead><tr><th>CATEGORY</th><th>QUALIFYING CRITERIA</th><th>SCORE RANGE / 720</th></tr></thead>
      <tbody id="neetCutoffRows">${rows(2026,'All Categories')}</tbody>
    </table>

    <div class="neet-cutoff-note"><b>Remember:</b> Qualifying cut-off ≠ MBBS admission cut-off. For college prediction, AIR is usually more useful than marks because marks-to-rank changes every year.</div>
  </section>`;}
  function render(view){var r=R();if(!r)return;r.style.display='block';if(view==='syllabus')r.innerHTML=syllabus();else if(view==='cutoff')r.innerHTML=cutoff();else return;bind(r);}
  function bind(r){
    r.querySelectorAll('[data-neet-back]').forEach(b=>b.onclick=function(){ if(window.cidOpenEntrance) window.cidOpenEntrance('NEET');});
    const aiqRound1={
      2026:{'General / UR':['22,342','572 marks'],'OBC':['23,075','571 marks'],'EWS':['27,179','564 marks'],'SC':['104,921','489 marks'],'ST':['132,111','471 marks']},
      2025:{'General / UR':['21,190','534 marks'],'OBC':['21,452','534 marks'],'EWS':['25,599','528 marks'],'SC':['110,389','457 marks'],'ST':['145,625','436 marks']},
      2024:{'General / UR':['19,603','660 marks'],'OBC':['20,281','658 marks'],'EWS':['23,419','655 marks'],'SC':['105,676','575 marks'],'ST':['145,207','544 marks']},
      2023:{'General / UR':['19,396','618 marks'],'OBC':['19,977','617 marks'],'EWS':['21,591','613 marks'],'SC':['100,013','509 marks'],'ST':['141,071','470 marks']}
    };
    const ay=r.querySelector('#aiqRoundYear');
    const ar=r.querySelector('#aiqRoundRows');
    const ah=r.querySelector('#aiqRoundHeadline');
    function updateAIQ(){
      if(!ay||!ar||!ah)return;
      const year=ay.value;
      ah.textContent=year+' AIQ MBBS Closing Benchmark — Round 1';
      ar.innerHTML=Object.entries(aiqRound1[year]).map(([cat,val])=>'<tr><td><b>'+cat+'</b></td><td>'+val[0]+'</td><td><b>'+val[1]+'</b></td></tr>').join('');
    }
    if(ay){updateAIQ();ay.onchange=updateAIQ;}
    let y=r.querySelector('#neetCutoffYear'),c=r.querySelector('#neetCutoffCategory');
    if(y&&c){let update=()=>{r.querySelector('#neetCutoffHeadline').textContent=y.value+' NEET (UG) Qualifying Cut-off';r.querySelector('#neetCutoffRows').innerHTML=rows(y.value,c.value);};y.onchange=update;c.onchange=update;}
  }
  document.addEventListener('click',function(e){let b=e.target.closest&&e.target.closest('[data-neet-open],[data-neet-tab]');if(!b)return;let k=b.getAttribute('data-neet-open')||b.getAttribute('data-neet-tab');if(k==='syllabus'||k==='cutoff'){e.preventDefault();e.stopImmediatePropagation();render(k);}},true);
})();
(function(){
  function root(){return document.getElementById('pageRoot');}
  function back(){return '<button class="cid-back" type="button" data-neet-back style="margin-top:22px;">← Back to NEET Overview</button>';}

  const zones={
    'UR / EWS':[
      ['660+','Elite National Colleges','Very strong zone for AIIMS Delhi-level / top national institutions, depending heavily on AIR and year.','AIIMS Delhi, JIPMER Puducherry, and other top-tier AIIMS campuses'],
      ['630–659','Top Government MBBS','Strong zone for highly competitive government colleges under favourable AIR and counselling conditions.','Maulana Azad Medical College (Delhi), King George\u2019s Medical University (Lucknow), Grant Medical College (Mumbai)'],
      ['600–629','Strong Government College Zone','Good planning zone for many government MBBS possibilities, but state and AIQ outcomes can differ widely.','Government Medical College Nagpur, Madras Medical College Chennai, newer AIIMS campuses (Bhopal/Jodhpur/Rishikesh)'],
      ['550–599','Mixed Government / Private Zone','Government MBBS becomes highly state- and quota-dependent; keep realistic private and BDS backups.','State-domicile government medical colleges, Kasturba Medical College Manipal, established private MBBS colleges'],
      ['Below 550','Backup Planning Zone','Do not predict a college from marks alone; focus on AIR, state quota, category, fees and alternate courses.','Private MBBS colleges, deemed universities, BDS and AYUSH courses']
    ],
    'OBC':[
      ['640+','Elite / Top Government Zone','Very competitive national options remain rank-driven.','AIIMS campuses and central institutes (OBC quota seats)'],
      ['600–639','Strong Government MBBS Zone','Good government MBBS planning range subject to AIR and quota.','Maulana Azad Medical College, KGMU Lucknow, Grant Medical College (OBC quota seats)'],
      ['540–599','Government Opportunity Zone','Possibilities improve with category and state quota, but vary sharply by state.','State-domicile government medical colleges, Madras Medical College, GMC Nagpur (OBC quota)'],
      ['480–539','Mixed College Zone','Use AIR plus domicile to build a realistic college list.','Kasturba Medical College Manipal, established private MBBS colleges'],
      ['Below 480','Backup Planning Zone','Admission route depends strongly on state counselling and fee preference.','Private / BDS / AYUSH / alternate routes']
    ],
    'SC':[
      ['600+','Top Government Opportunity','Strong score zone; actual allotment remains AIR and seat-category dependent.','AIIMS campuses, Maulana Azad Medical College, KGMU Lucknow (SC quota seats)'],
      ['520–599','Strong Government Planning Zone','Good range for category-based government planning in many counselling ecosystems.','State-domicile government medical colleges, Madras Medical College, GMC Nagpur (SC quota)'],
      ['450–519','Government / Mixed Zone','State quota and domicile become especially important.','State government medical colleges (domicile-dependent), select private MBBS'],
      ['380–449','Mixed Private / BDS Zone','Keep a broad preference list and compare fee structure.','Private MBBS colleges, BDS and allied medical routes'],
      ['Below 380','Backup Planning Zone','Use current AIR and counselling rules before making any college claim.','Private / BDS / AYUSH / alternate options']
    ],
    'ST':[
      ['560+','Strong Government Opportunity','High planning zone for category-based government options, subject to AIR and seat availability.','AIIMS campuses and top government medical colleges (ST quota seats)'],
      ['470–559','Government Planning Zone','Potential government opportunities vary materially by state and quota.','State-domicile government medical colleges (ST quota)'],
      ['390–469','Mixed Government / Private Zone','Domicile and category seat availability are key.','State government medical colleges (select states), established private MBBS'],
      ['320–389','Private / BDS Planning Zone','Build a wide counselling preference list.','Private MBBS colleges, BDS, AYUSH'],
      ['Below 320','Backup Planning Zone','Marks alone are not enough for a reliable college prediction.','Alternate medical and allied-health routes']
    ]
  };

  const topColleges=[
    ['AIIMS New Delhi','~125','The most sought-after MBBS destination in India \u2014 lowest fees, strongest reputation.'],
    ['Maulana Azad Medical College (MAMC), Delhi','~250','Delhi\u2019s largest government MBBS intake; consistently top-ranked.'],
    ['Lady Hardinge Medical College (LHMC), Delhi','~240','Women\u2019s college; among Delhi\u2019s most preferred government options.'],
    ['King George\u2019s Medical University (KGMU), Lucknow','~250','UP\u2019s flagship medical university with a very large intake.'],
    ['Madras Medical College, Chennai','~250+','One of India\u2019s oldest and largest government medical colleges.'],
    ['Grant Medical College, Mumbai','~200+','Attached to Sir J.J. Hospital; among Maharashtra\u2019s top choices.'],
    ['Seth GS Medical College (KEM), Mumbai','~200','Renowned for clinical exposure via KEM Hospital.'],
    ['JIPMER, Puducherry','~200','Institution of national importance; own separate reputation and pull.'],
    ['Vardhman Mahavir Medical College (VMMC), Delhi','~170','Attached to Safdarjung Hospital; strong clinical training.'],
    ['University College of Medical Sciences (UCMS), Delhi','~170','Delhi University-affiliated; consistently high-demand.'],
    ['BHU Institute of Medical Sciences, Varanasi','~100','Prestigious central university medical institute.'],
    ['AFMC, Pune','~150','Armed Forces Medical College \u2014 unique service-bond structure, highly preferred.']
  ];

  function zoneCards(category){
    return zones[category].map(function(z){
      return '<article class="neet-college-zone"><div class="zone-score">'+z[0]+' · planning band</div><h3>'+z[1]+'</h3><p>'+z[2]+'</p><ul><li><b>Commonly preferred colleges at this level:</b> '+z[3]+'</li></ul></article>';
    }).join('');
  }

  function colleges(){
    return back()+`<section class="upsc-section" style="margin-top:18px;">
      <div class="cid-kicker">NEET COLLEGES & ADMISSIONS</div>
      <h2>Score to College Planning Guide</h2>
      <p class="sub">Based on broad multi-year counselling patterns. Select a category to view indicative score zones and the type of colleges a student should realistically explore.</p>

      <div class="neet-college-toolbar">
        <select id="neetCollegeCategory" class="neet-select">
          <option value="UR / EWS">General / UR / EWS</option>
          <option value="OBC">OBC</option>
          <option value="SC">SC</option>
          <option value="ST">ST</option>
        </select>
        <select id="neetCollegeQuota" class="neet-select">
          <option>All India + State quota view</option>
          <option>All India Quota (AIQ) focus</option>
          <option>State quota focus</option>
        </select>
      </div>

      <div class="neet-college-hero">
        <span style="font-size:11px;letter-spacing:1px;font-weight:800;color:#61718a;">COUNSELLING PRINCIPLE</span>
        <b>Marks tell the preparation zone. AIR tells the college possibility.</b>
        <p>NEET marks can shift sharply when paper difficulty changes. Use these score bands only for early counselling guidance; final college predictions should be based on AIR, category, domicile/state quota, seat matrix, preferences and counselling round.</p>
      </div>

      <div id="neetCollegeZones" class="neet-college-grid">${zoneCards('UR / EWS')}</div>

      <h3 style="margin:28px 0 4px;color:#2d3f58;">Top Colleges \u2014 Approx. MBBS Seats</h3>
      <p class="sub">Some of the most commonly preferred government medical colleges nationally, with their approximate MBBS intake. Seat numbers shift slightly each year with NMC approvals \u2014 use these as a planning reference, not an exact current figure.</p>
      <div style="overflow:auto;">
      <table class="mba-cutoff-table">
        <thead><tr><th>College</th><th>Approx. Seats</th><th>Why It\u2019s Preferred</th></tr></thead>
        <tbody>${topColleges.map(function(c){ return '<tr><td><b>'+c[0]+'</b></td><td><span class="mba-cutoff-badge">'+c[1]+'</span></td><td>'+c[2]+'</td></tr>'; }).join('')}</tbody>
      </table>
      </div>

      <div class="neet-college-note"><b>Important:</b> This is intentionally shown as a <b>college zone guide</b>, not “X marks = guaranteed college”. College allotment depends on rank, quota, category, domicile, seat availability, preferences and counselling round. The next upgrade can add a college-wise search using AIR + state + category for more precise predictions.</div>
    </section>`;
  }

  function render(){
    var r=root(); if(!r) return;
    r.style.display='block';
    r.innerHTML=colleges();
    var cat=r.querySelector('#neetCollegeCategory');
    var zonesBox=r.querySelector('#neetCollegeZones');
    if(cat&&zonesBox){
      cat.onchange=function(){zonesBox.innerHTML=zoneCards(cat.value);};
    }
    r.querySelectorAll('[data-neet-back]').forEach(function(b){
      b.onclick=function(){if(window.cidOpenEntrance) window.cidOpenEntrance('NEET');};
    });
  }

  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('[data-neet-open],[data-neet-tab]');
    if(!b) return;
    var k=b.getAttribute('data-neet-open')||b.getAttribute('data-neet-tab');
    if(k==='colleges'){
      e.preventDefault();
      e.stopImmediatePropagation();
      render();
    }
  },true);
})();
(function(){
  const bands=[
    {
      id:'elite',min:660,max:720,score:'660+',zone:'Elite National Colleges',
      desc:'Very strong planning zone for the most competitive national institutions; AIR remains the deciding factor.',
      colleges:['AIIMS Delhi','JIPMER Puducherry','Maulana Azad Medical College, Delhi','Lady Hardinge Medical College, Delhi','Newer AIIMS campuses (Bhopal/Jodhpur/Rishikesh)']
    },
    {
      id:'top',min:630,max:659,score:'630–659',zone:'Top Government MBBS',
      desc:'Strong zone for highly competitive government MBBS planning under favourable AIR and counselling conditions.',
      colleges:['King George\u2019s Medical University, Lucknow','Grant Medical College, Mumbai','Vardhman Mahavir Medical College, Delhi','Madras Medical College, Chennai','University College of Medical Sciences, Delhi']
    },
    {
      id:'strong',min:600,max:629,score:'600–629',zone:'Strong Government Zone',
      desc:'A good government MBBS planning range, but outcomes vary significantly by AIR, category and state quota.',
      colleges:['Government Medical College, Nagpur','Seth GS Medical College (KEM), Mumbai','BHU Institute of Medical Sciences, Varanasi','JIPMER (select category seats)','State government medical colleges (domicile-dependent)']
    },
    {
      id:'mixed',min:550,max:599,score:'550–599',zone:'Mixed Government / Private',
      desc:'Government MBBS becomes more state- and quota-dependent; realistic backup options should also be planned.',
      colleges:['State-domicile government medical colleges','Kasturba Medical College, Manipal','Established private MBBS colleges','Government medical colleges via state quota','Government/private BDS options']
    },
    {
      id:'backup',min:0,max:549,score:'Below 550',zone:'Backup Planning Zone',
      desc:'Marks alone should not be used to promise a college. Build options using AIR, state quota, fees and counselling choices.',
      colleges:['Private MBBS colleges','BDS colleges','AYUSH colleges (BAMS/BHMS/BUMS)','Deemed university medical colleges','Repeat / alternate course planning']
    }
  ];

  function collegeList(b){
    return `
      <div class="neet-college-list" id="neetCollegeList_${b.id}">
        <h4>Representative possibilities in this planning zone</h4>
        <div class="neet-college-grid">
          ${b.colleges.map(c=>`<div class="neet-college-pill">${c}</div>`).join('')}
        </div>
        <div class="neet-list-note">
          <b>Important:</b> These are broad planning examples, not guaranteed allotments. Exact college prediction should use AIR, category, domicile/state quota, counselling round, seat matrix and that year's closing ranks.
        </div>
      </div>`;
  }

  function rows(){
    return bands.map((b,i)=>`
      <div class="neet-ladder-row" id="neetBand_${b.id}" data-band="${b.id}" title="Click to view college possibilities">
        <div>
          <div class="neet-band">${b.score}</div>
          <div class="neet-scale"><i style="width:${100-i*16}%"></i></div>
        </div>
        <div class="neet-zone">${b.zone}</div>
        <div class="neet-desc">${b.desc}</div>
        <div class="neet-arrow"><button type="button" data-neet-example="${b.id}">View college list →</button></div>
      </div>
      ${collegeList(b)}
    `).join('');
  }

  function build(){
    return `
      <div class="neet-score-wrap">
        <div class="neet-score-checker">
          <div>
            <label>Expected NEET Score</label>
            <input id="neetExpectedScore" class="neet-score-input" type="number" min="0" max="720" placeholder="Enter marks out of 720">
          </div>
          <button id="neetCheckZone" class="neet-score-btn" type="button">Check My College Zone</button>
        </div>
        <div id="neetScoreResult" class="neet-score-result"></div>
        <div class="neet-ladder">${rows()}</div>
        <div class="neet-college-note">
          <b>How to use this:</b> Click any score band to view representative college possibilities. Marks indicate a broad planning zone; use AIR + category + domicile/state quota + seat matrix + counselling round for actual college-level prediction.
        </div>
      </div>`;
  }

  function attach(){
    const host=document.querySelector('#neetCollegeZones');
    if(!host) return;
    host.outerHTML='<div id="neetCollegeZones">'+build()+'</div>';

    const input=document.getElementById('neetExpectedScore');
    const btn=document.getElementById('neetCheckZone');
    const result=document.getElementById('neetScoreResult');

    function openList(id){
      const list=document.getElementById('neetCollegeList_'+id);
      const row=document.getElementById('neetBand_'+id);
      if(!list || !row) return;
      const wasOpen=list.classList.contains('show');
      document.querySelectorAll('.neet-college-list').forEach(x=>x.classList.remove('show'));
      document.querySelectorAll('.neet-ladder-row').forEach(x=>x.classList.remove('active'));
      if(!wasOpen){
        list.classList.add('show');
        row.classList.add('active');
      }
      document.querySelectorAll('[data-neet-example]').forEach(b=>{
        b.textContent=b.dataset.neetExample===id && !wasOpen?'Hide college list ↑':'View college list →';
      });
    }

    function check(){
      const v=Number(input.value);
      if(input.value==='' || v<0 || v>720){
        result.className='neet-score-result show';
        result.innerHTML='<b>Enter a valid score between 0 and 720</b><span>Then we will highlight the corresponding college planning zone.</span>';
        return;
      }
      const b=bands.find(x=>v>=x.min && v<=x.max);
      if(!b) return;
      result.className='neet-score-result show';
      result.innerHTML='<small>YOUR CURRENT PLANNING ZONE</small><b>'+b.score+' · '+b.zone+'</b><span>'+b.desc+'</span>';
      openList(b.id);
      document.getElementById('neetBand_'+b.id).scrollIntoView({behavior:'smooth',block:'center'});
    }

    btn.onclick=check;
    input.addEventListener('keydown',e=>{if(e.key==='Enter')check();});

    document.querySelectorAll('.neet-ladder-row').forEach(row=>{
      row.addEventListener('click',e=>{
        const id=row.dataset.band;
        if(id) openList(id);
      });
    });

    document.querySelectorAll('[data-neet-example]').forEach(button=>{
      button.onclick=function(e){
        e.stopPropagation();
        openList(this.dataset.neetExample);
      };
    });
  }

  function watch(){
    const obs=new MutationObserver(()=>{
      if(document.querySelector('#neetCollegeZones') && !document.querySelector('#neetExpectedScore')) attach();
    });
    obs.observe(document.body,{childList:true,subtree:true});
    setTimeout(attach,300);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',watch);
  else watch();
})();
