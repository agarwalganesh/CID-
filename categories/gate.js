// Category module extracted from index.html.

(function(){
  function root(){ return document.getElementById('pageRoot'); }
  function back(label, action){ return '<button class="cid-back" type="button" onclick="'+action+'" style="margin-top:22px;">← Back to '+label+'</button>'; }
  function chipList(items){ return '<div class="ca-topic-chips">' + items.map(function(t){ return '<span class="ca-topic-chip">'+t+'</span>'; }).join('') + '</div>'; }

  var GATE_SUBJECTS = {
    cs: { code:'CS', name:'Computer Science & Information Technology',
      topics:['Data Structures & Algorithms','Programming & OOP','Theory of Computation','Computer Networks','Operating Systems','DBMS','Computer Organisation & Architecture','Compiler Design'],
      cutoff:[['2024','32.5','29.2','21.6'],['2025','29.2','26.2','19.4'],['2026','30','~27','~20']] },
    me: { code:'ME', name:'Mechanical Engineering',
      topics:['Engineering Mechanics','Strength of Materials','Theory of Machines & Vibrations','Thermodynamics','Fluid Mechanics & Turbomachinery','Heat Transfer','Manufacturing & Industrial Engineering','Machine Design'],
      cutoff:[['2024','Verification Required','Verification Required','Verification Required'],['2025','35.8','32.2','23.8'],['2026','~35','~31.5','~23']] },
    ee: { code:'EE', name:'Electrical Engineering',
      topics:['Electric Circuits','Electromagnetic Fields','Signals & Systems','Electrical Machines','Power Systems','Control Systems','Power Electronics','Analog & Digital Electronics'],
      cutoff:[['2024','Verification Required','Verification Required','Verification Required'],['2025','25','22.5','16.6'],['2026','~26','~23.4','~17.3']] },
    ece: { code:'EC', name:'Electronics & Communication Engineering',
      topics:['Network Theory','Analog & Digital Circuits','Signals & Systems','Control Systems','Communication Systems','Electromagnetics','Microprocessors','Analog/Digital ICs'],
      cutoff:[['2024','Verification Required','Verification Required','Verification Required'],['2025','25','22.5','16.6'],['2026','~26','~23.4','~17.3']] },
    ce: { code:'CE', name:'Civil Engineering',
      topics:['Structural Analysis','RCC & Steel Structures','Geotechnical Engineering','Fluid Mechanics & Hydraulics','Environmental Engineering','Transportation Engineering','Surveying','Construction Materials & Management'],
      cutoff:[['2024','Verification Required','Verification Required','Verification Required'],['2025','29.2','26.2','19.4'],['2026','~30','~27','~20']] },
    ch: { code:'CH', name:'Chemical Engineering',
      topics:['Process Calculations & Thermodynamics','Fluid Mechanics','Mass Transfer','Heat Transfer','Chemical Reaction Engineering','Instrumentation & Process Control','Plant Design & Economics'],
      cutoff:[['2024','Verification Required','Verification Required','Verification Required'],['2025','~45','~40.5','~30'],['2026','Verification Required','Verification Required','Verification Required']] },
    in: { code:'IN', name:'Instrumentation Engineering',
      topics:['Electrical & Electronic Measurements','Sensors & Transducers','Signals & Systems','Control Systems','Analog & Digital Electronics','Process Control','Communication & Optical Instrumentation'],
      cutoff:[['2024','Verification Required','Verification Required','Verification Required'],['2025','~48','~43.2','~32'],['2026','Verification Required','Verification Required','Verification Required']] },
    da: { code:'DA', name:'Data Science & Artificial Intelligence',
      topics:['Probability & Statistics','Linear Algebra','Machine Learning','Data Science Programming (Python)','Database Management','Artificial Intelligence & Search','Optimisation'],
      cutoff:[['2024','\u2014 (new paper)','\u2014','\u2014'],['2025','29','26.1','19.3'],['2026','Verification Required','Verification Required','Verification Required']] },
    bt: { code:'BT', name:'Biotechnology',
      topics:['Biochemistry & Molecular Biology','Microbiology','Cell Biology','Genetics & Genetic Engineering','Bioprocess Engineering','Immunology','Plant & Animal Biotechnology'],
      cutoff:[['2024','38.9','35','26'],['2025','28','25.2','18.7'],['2026','Verification Required','Verification Required','Verification Required']] },
    ph: { code:'PH', name:'Physics',
      topics:['Mathematical Physics','Classical Mechanics','Electromagnetic Theory','Quantum Mechanics','Thermodynamics & Statistical Physics','Atomic & Molecular Physics','Solid State Physics','Nuclear & Particle Physics'],
      cutoff:[['2024','Verification Required','Verification Required','Verification Required'],['2025','~28','~25.2','~18.7'],['2026','Verification Required','Verification Required','Verification Required']] }
  };
  var SUBJECT_LIST = ['cs','me','ee','ece','ce','ch','in','da','bt','ph'];

  var GATE_PSUS = [
    ['Maharatna/Navratna (highest cutoff)', ['ONGC','GAIL','IOCL','NTPC','BHEL','SAIL'], 'General category typically needs 70\u201380+ marks; ONGC/GAIL often the highest bar.'],
    ['Miniratna / other CPSEs', ['HAL','BEL','PGCIL (POWERGRID)','NHPC','MDL','HPCL','BPCL'], 'General category typically needs 60\u201375 marks depending on branch and vacancies.'],
    ['Others', ['Airports Authority of India (AAI)','Coal India','NPCIL','DRDO (select roles)'], 'Cutoffs vary widely (~60\u201370 marks) \u2014 always check that PSU\u2019s own notification.']
  ];

  function overview(){
    var cards = [
      { key:'examdetails', icon:'📋', title:'Exam Details', desc:'Pattern, marking scheme, papers and score validity.' },
      { key:'subjects', icon:'📚', title:'Subjects', desc:SUBJECT_LIST.length+' major papers \u2014 tap any one for topics, cutoff trend and career.' },
      { key:'psu', icon:'🏭', title:'PSU Recruitment', desc:'Which PSUs hire via GATE, and what score they typically need.' },
      { key:'career', icon:'💼', title:'Career Options', desc:'M.Tech, PhD and PSU pathways after GATE.' }
    ];
    var cardsHTML = cards.map(function(c){
      return '<button class="upsc-module" type="button" onclick="gateRender(\''+c.key+'\')"><div class="i">'+c.icon+'</div><h3>'+c.title+'</h3><p>'+c.desc+'</p></button>';
    }).join('');
    return `
      <section class="upsc-section" style="margin-top:28px;">
        <div class="cid-kicker">GATE INTELLIGENCE</div>
        <h1 style="margin:8px 0 8px;">GATE \u2014 Graduate Aptitude Test in Engineering</h1>
        <p class="sub">A single national exam with 30 papers \u2014 the gateway to M.Tech/PhD admission at IITs/NITs and entry-level PSU recruitment.</p>
        <div class="upsc-grid" style="margin-top:22px;">${cardsHTML}</div>
      </section>`;
  }

  function examDetailsPage(){
    return back('GATE Overview', "gateRender('overview')") + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">GATE</div>
        <h2>📋 Exam Details</h2>
        <div class="exam-fact-row">
          <div class="exam-fact"><span class="exam-fact-label">Conducting Body</span><span class="exam-fact-value">IITs, rotational basis (IIT Guwahati for 2026)</span></div>
          <div class="exam-fact"><span class="exam-fact-label">Duration</span><span class="exam-fact-value">3 hours per paper</span></div>
          <div class="exam-fact"><span class="exam-fact-label">Score Validity</span><span class="exam-fact-value">3 years from result date</span></div>
        </div>
        <div class="exam-block-label">Exam Pattern</div>
        <div class="ca-step-card">30 test papers, Computer-Based Test (CBT). Each paper: 65 questions / 100 marks \u2014 10 questions (15 marks) from General Aptitude, common to all papers; remaining 55 questions (85 marks) from the candidate\u2019s chosen subject. Question types: MCQ, MSQ (Multiple Select) and NAT (Numerical Answer Type). Since 2021, candidates may appear for two papers from an approved combination list.</div>
        <div class="exam-block-label">Marking Scheme</div>
        <div class="ca-step-card"><span class="exam-marking-badge">MCQs: \u22121/3 (1-mark Qs), \u22122/3 (2-mark Qs) \u2014 no negative marking for MSQ or NAT</span></div>
        <div class="exam-block-label">Scoring</div>
        <div class="ca-step-card">Raw score out of 100 is normalised across sessions/papers to a scale of 0\u20131000 (the "GATE Score") \u2014 this is what's used for admissions and PSU shortlisting, not the raw marks.</div>
        <div class="exam-block-label">Eligibility</div>
        <div class="ca-step-card">Bachelor\u2019s degree in Engineering/Technology/Architecture/Science (or final year), or equivalent professional qualification. <b>No upper age limit.</b></div>
      </section>`;
  }

  function subjectsListPage(){
    var cards = SUBJECT_LIST.map(function(k){
      var s = GATE_SUBJECTS[k];
      return '<button type="button" class="exam-icon-card" onclick="gateRender(\'subject:'+k+'\')">'+
        '<span class="exam-icon">📖</span>'+
        '<b>'+s.code+'</b>'+
        '<span>'+s.name+'</span>'+
        '<em>Explore →</em>'+
      '</button>';
    }).join('');
    return back('GATE Overview', "gateRender('overview')") + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">GATE</div>
        <h2>📚 Subjects</h2>
        <p class="sub">10 of GATE\u2019s most-asked-about papers \u2014 tap any one for topics, cutoff trend and career relevance. (GATE has 30 papers in total; less commonly asked ones aren\u2019t listed here to keep this focused.)</p>
        <div class="exam-icon-grid" style="margin-top:22px;">${cards}</div>
      </section>`;
  }

  function subjectDetailPage(key){
    var s = GATE_SUBJECTS[key];
    if(!s) return subjectsListPage();
    var cutoffRows = s.cutoff.map(function(r){
      return '<tr><td><b>'+r[0]+'</b></td><td><span class="mba-cutoff-badge">'+r[1]+'</span></td><td><span class="mba-cutoff-badge">'+r[2]+'</span></td><td><span class="mba-cutoff-badge">'+r[3]+'</span></td></tr>';
    }).join('');
    return back('GATE Subjects', "gateRender('subjects')") + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">GATE \u2014 ${s.code}</div>
        <h2>${s.name}</h2>

        <div class="exam-block-label">Important Topics</div>
        <div class="ca-step-card">${chipList(s.topics)}</div>

        <div class="exam-block-label">Paper Pattern & Marking</div>
        <div class="ca-step-card">65 questions / 100 marks / 3 hours \u2014 15 marks General Aptitude (common to all papers) + 85 marks subject-specific.<div class="ca-step-note" style="margin-top:8px;">MCQs: \u22121/3 (1-mark), \u22122/3 (2-mark). No negative marking for MSQ/NAT.</div></div>

        <div class="exam-block-label">Cutoff Trend (Last 3 Years, out of 100)</div>
        <div class="ca-step-card">
          <div style="overflow:auto;"><table class="mba-cutoff-table"><thead><tr><th>Year</th><th>General</th><th>OBC-NCL/EWS</th><th>SC/ST/PwD</th></tr></thead><tbody>${cutoffRows}</tbody></table></div>
          <div class="ca-step-note" style="margin-top:10px;">This is the <b>qualifying</b> cutoff only \u2014 the score needed to appear on the merit list. Admission to a specific IIT/NIT or PSU shortlisting needs a much higher normalised GATE score. Source: Official GATE qualifying cutoff releases.</div>
        </div>

        <div class="exam-block-label">Career Relevance</div>
        <div class="ca-step-card">M.Tech/PhD admission at IITs, NITs and IIITs; entry-level Engineer/Officer roles at PSUs matching this discipline; a strong credential even for private-sector core engineering roles.</div>
      </section>`;
  }

  function psuPage(){
    var rows = GATE_PSUS.map(function(g){
      return '<div class="ca-detail-block"><div class="ca-step-label">'+g[0]+'</div><div class="ca-step-card">'+chipList(g[1])+'<div class="ca-step-note" style="margin-top:8px;">'+g[2]+'</div></div></div>';
    }).join('');
    return back('GATE Overview', "gateRender('overview')") + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">GATE</div>
        <h2>🏭 PSU Recruitment via GATE</h2>
        <p class="sub">Many Public Sector Undertakings use GATE scores to shortlist candidates, skipping their own written test \u2014 shortlisted candidates then go through a Group Discussion/Interview.</p>
        ${rows}
        <div class="ca-detail-block"><div class="ca-step-label">General Process</div><div class="ca-step-card">Valid GATE score (within its 3-year validity) in the PSU\u2019s required paper \u2192 PSU-specific eligibility check (min. 60% aggregate or equivalent CGPA, usually 55% for SC/ST/PwBD) \u2192 shortlisting purely on GATE score/rank \u2192 Group Discussion/Interview (some PSUs skip this and hire on GATE score alone) \u2192 Medical fitness, and sometimes security clearance (e.g. NPCIL, BARC).</div></div>
        <div class="ca-detail-block"><div class="ca-step-label">Age Limit (typical)</div><div class="ca-step-card">General: 21\u201330 years \u00b7 OBC: up to 33 \u00b7 SC/ST: up to 35 (varies by PSU \u2014 always confirm from that PSU\u2019s own notification).</div></div>
      </section>`;
  }

  function careerPage(){
    return back('GATE Overview', "gateRender('overview')") + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">GATE</div>
        <h2>💼 Career Options</h2>
        <div class="ca-detail-block"><div class="ca-step-label">Higher Education</div><div class="ca-step-card">${chipList(['M.Tech/M.E. at IITs, NITs, IIITs, GFTIs','Direct PhD (Integrated) at IITs/IISc','MS by Research programmes'])}</div></div>
        <div class="ca-detail-block"><div class="ca-step-label">Government / PSU Careers</div><div class="ca-step-card">${chipList(['Engineer/Executive Trainee roles at Maharatna/Navratna PSUs','Scientist/Engineer roles at DRDO, ISRO (select centres), BARC','State PSU engineering recruitment (in some states)'])}</div></div>
        <div class="ca-detail-block"><div class="ca-step-label">Other Pathways</div><div class="ca-step-card">${chipList(['Teaching/Assistant Professor roles at some private engineering colleges (with M.Tech)','Strong differentiator for core-engineering private sector roles','Scholarship (stipend) during M.Tech for GATE-qualified students at centrally-funded institutes'])}</div></div>
      </section>`;
  }

  window.gateRender = function(view){
    var r = root();
    if(!r) return;
    r.style.display = 'block';
    if(view === 'examdetails') r.innerHTML = examDetailsPage();
    else if(view === 'subjects') r.innerHTML = subjectsListPage();
    else if(view && view.indexOf('subject:') === 0) r.innerHTML = subjectDetailPage(view.slice(8));
    else if(view === 'psu') r.innerHTML = psuPage();
    else if(view === 'career') r.innerHTML = careerPage();
    else r.innerHTML = overview();
  };

  var previousOpenCategory = window.cidOpenCategory;
  window.cidOpenCategory = function(name){
    if(name === 'GATE OA'){
      document.body.classList.remove('cid-home-mode');
      document.body.classList.add('cid-category-mode');
      if(typeof window.cidRenderCategorySidebar === 'function'){
        window.cidRenderCategorySidebar('GATE', 'Engineering & Other Applications', [
          {key:'overview', label:'GATE Overview'},
          {key:'examdetails', label:'Exam Details'},
          {key:'subjects', label:'Subjects'},
          {key:'psu', label:'PSU Recruitment'},
          {key:'career', label:'Career Options'}
        ], 'overview', function(key){
          window.gateRender(key === 'overview' ? 'overview' : key);
          window.cidSetSidebarActive(key);
        });
      }
      var home = document.getElementById('cid-category-home');
      if(home) home.style.display = 'none';
      var topbar = document.querySelector('.cid-category-topbar');
      if(topbar){
        topbar.style.display = 'flex';
        var label = topbar.querySelector('.cid-current-category');
        if(label) label.textContent = 'GATE';
      }
      document.getElementById('pageRoot').innerHTML = '';
      window.gateRender('overview');
      return;
    }
    if(typeof previousOpenCategory === 'function') return previousOpenCategory(name);
  };
})();
