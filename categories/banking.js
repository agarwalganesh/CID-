// Category module extracted from index.html.

(function(){
  function root(){ return document.getElementById('pageRoot'); }
  function back(label, target){ return '<button class="cid-back" type="button" data-bk-back="'+target+'" style="margin-top:22px;">← Back to '+label+'</button>'; }

  var BANKING_EXAMS = {
    ibpspo: {
      icon:'🏦', name:'IBPS PO', sub:'Probationary Officer / Management Trainee',
      examDetails:{
        stages:['Prelims','Mains (Objective + Descriptive)','Personality Test','Interview'],
        marking:'\u22120.25 per wrong answer (Prelims & Mains objective)',
        structure:'Prelims: 100 marks/1 hr (qualifying only). Mains: 200 objective + 25 descriptive = 225 marks/2hr55min. Interview: 100 marks. Final merit = Mains + Interview in 80:20 ratio.',
        frequency:'Once a year (typically Aug\u2013Oct cycle), conducted by IBPS for 11 Public Sector Banks.',
        posts:['Probationary Officer (PO)','Management Trainee (MT)']
      },
      eligibilitySummary:'Bachelor\u2019s degree in any discipline from a recognised university. Age 20\u201330 years.',
      subjects:[
        {name:'Prelims', desc:'English Language, Quantitative Aptitude, Reasoning Ability \u2014 100 questions/100 marks, sectionally timed.'},
        {name:'Mains \u2014 Objective', desc:'Reasoning & Computer Aptitude, General/Economy/Banking Awareness, English Language, Data Analysis & Interpretation \u2014 170 questions/200 marks.'},
        {name:'Mains \u2014 Descriptive', desc:'Essay & Letter Writing \u2014 25 marks, 30 minutes, tests written English.'}
      ],
      cutoff:{
        note:'IBPS PO cutoff is released category-wise and stage-wise (Prelims/Mains/Final) \u2014 figures below are General (UR) category, out of 100 for Mains/Final.',
        cols:['Cycle','Mains Cutoff (UR)','Final Cutoff (UR, Mains+Interview)'],
        rows:[
          ['2022','71.25 / 100','Verification Required'],
          ['2023','63.00 / 100','41.13 / 100'],
          ['2024','66.50 / 100','42.69 / 100 (lowest in 5 years)']
        ]
      },
      career:{
        path:'PO/MT \u2192 confirmed as Assistant Manager after 2-year probation \u2192 Manager \u2192 Senior Manager \u2192 Chief Manager \u2192 Asst. General Manager and above, with internal promotion exams (JAIIB/CAIIB help).',
        salary:'Basic pay ₹48,480, rising to ₹85,920 with increments. In-hand ~₹74,000\u201376,000/month depending on posting and allowances.'
      }
    },
    ibpsclerk: {
      icon:'📋', name:'IBPS Clerk', sub:'Customer Service Associate',
      examDetails:{
        stages:['Prelims','Mains','Local Language Proficiency Test (LLPT)'],
        marking:'\u22120.25 per wrong answer',
        structure:'Prelims: 100 questions/100 marks/60 min (qualifying only). Mains: 160 questions/200 marks/125 min \u2014 decides the entire final merit list. No interview.',
        frequency:'Once a year (typically Oct cycle), conducted by IBPS for Public Sector Banks.',
        posts:['Customer Service Associate (Clerk)']
      },
      eligibilitySummary:'Bachelor\u2019s degree in any discipline. Age 20\u201328 years.',
      subjects:[
        {name:'Prelims', desc:'English Language, Numerical Ability, Reasoning Ability.'},
        {name:'Mains', desc:'Reasoning & Computer Aptitude, English Language, Quantitative Aptitude, General/Financial Awareness.'}
      ],
      cutoff:{
        note:'IBPS Clerk releases cutoff state/UT-wise and category-wise (candidates are allotted to a specific state) \u2014 there is no single national figure. Mains cutoff for General category has recently run roughly in the 60\u201375/200 range depending on state, but always confirm from that state\u2019s specific merit list.',
        cols:['Scope','What Determines the Cutoff'],
        rows:[['All states/categories','Set separately per state/UT and category \u2014 check the specific state merit list on ibps.in']]
      },
      career:{
        path:'Clerk \u2192 Senior Clerk (with increments) \u2192 can appear for internal PO-track exams to move into the officer cadre over time.',
        salary:'Basic pay ~₹24,050. In-hand ~₹28,000\u201332,000/month depending on posting and allowances.'
      }
    },
    ibpsso: {
      icon:'🧑‍💼', name:'IBPS SO', sub:'Specialist Officer',
      examDetails:{
        stages:['Prelims','Mains (stream-specific Professional Knowledge)','Interview'],
        marking:'\u22120.25 per wrong answer',
        structure:'Prelims and Mains pattern varies slightly by stream \u2014 IT/Agriculture/Law/Rajbhasha streams replace the Quant section with a Professional Knowledge paper; Marketing/HR follow a similar but stream-tailored Mains.',
        frequency:'Once a year, conducted by IBPS for specialist roles across Public Sector Banks.',
        posts:['IT Officer','Law Officer','HR/Personnel Officer','Marketing Officer','Agricultural Field Officer','Rajbhasha Adhikari']
      },
      eligibilitySummary:'A professional degree matching the stream \u2014 e.g. B.E./B.Tech (CS/IT) for IT Officer, LLB for Law Officer, MBA/PGDM (HR) for HR Officer, B.Sc Agriculture for Agricultural Field Officer. Age typically 20\u201330 years (varies slightly by stream).',
      subjects:[
        {name:'Reasoning & English', desc:'Common to all streams in Prelims (and part of Mains).'},
        {name:'Professional Knowledge', desc:'Stream-specific \u2014 the deciding section; depth matches a professional degree in that field, not general banking awareness.'},
        {name:'General/Banking Awareness', desc:'Included in Mains for most streams.'}
      ],
      cutoff:{
        note:'IBPS SO cutoff varies sharply by stream (IT/Law/HR/Marketing/Agriculture each have separate, much smaller vacancy pools than PO/Clerk) \u2014 there is no single meaningful cross-stream figure. Always check the specific stream\u2019s cutoff on ibps.in.',
        cols:['Scope','What Determines the Cutoff'],
        rows:[['Each stream separately','Vacancies and applicant pool differ hugely by stream \u2014 e.g. IT Officer draws far more applicants than Rajbhasha Adhikari']]
      },
      career:{
        path:'Specialist Officer \u2192 Senior specialist/managerial roles within that vertical (e.g. IT Officer \u2192 Chief Manager - IT), generally a faster, more domain-focused ladder than generalist PO.',
        salary:'Broadly similar scale to IBPS PO (Basic ~₹48,480 onward) \u2014 exact scale depends on the specific bank\u2019s SO grade.'
      }
    },
    ibpsrrb: {
      icon:'🌾', name:'IBPS RRB', sub:'Regional Rural Banks \u2014 Officer & Office Assistant',
      examDetails:{
        stages:['Office Assistant: Prelims \u2192 Mains (no interview)','Officer Scale I: Prelims \u2192 Mains \u2192 Interview','Officer Scale II/III: Single exam \u2192 Interview'],
        marking:'\u22120.25 per wrong answer',
        structure:'Office Assistant Prelims: 80 questions/80 marks/45 min; Mains: 200 marks/120 min. Officer Scale I Prelims: 80 marks; Mains adds General Awareness (rural/cooperative banking focus) and Computer Knowledge as full sections.',
        frequency:'Once a year, conducted by IBPS (CRP RRBs) for all Regional Rural Banks.',
        posts:['Office Assistant (Multipurpose)','Officer Scale I','Officer Scale II','Officer Scale III']
      },
      eligibilitySummary:'Graduate in any discipline. Office Assistant & Officer Scale I: 18\u201330 years. Officer Scale II: 21\u201332 years. Officer Scale III: 21\u201340 years. Knowledge of the local language of the applied state is often preferred/required.',
      subjects:[
        {name:'Prelims', desc:'Reasoning and Numerical Ability only \u2014 no English in RRB Prelims (unlike IBPS PO/Clerk).'},
        {name:'Mains', desc:'Reasoning, Numerical Ability, General Awareness (rural/cooperative banking emphasis), English/Hindi Language, Computer Knowledge.'}
      ],
      cutoff:{
        note:'IBPS RRB cutoff is released separately per RRB/state and category \u2014 similar to IBPS Clerk, there is no single national figure since candidates are allotted to a specific Regional Rural Bank.',
        cols:['Scope','What Determines the Cutoff'],
        rows:[['Each RRB/state separately','Set per participating Regional Rural Bank and category \u2014 check the specific RRB\u2019s merit list on ibps.in']]
      },
      career:{
        path:'Office Assistant \u2192 can move into Officer cadre via internal exams. Officer Scale I \u2192 II \u2192 III with experience and internal promotion exams.',
        salary:'Office Assistant: Basic ~₹24,050, in-hand ~₹35,000\u201337,000/month.'
      }
    },
    sbipo: {
      icon:'🏛️', name:'SBI PO', sub:'State Bank of India \u2014 Probationary Officer',
      examDetails:{
        stages:['Prelims','Mains (Objective + Descriptive)','Phase III \u2014 Psychometric Test, Group Exercise & Interview'],
        marking:'\u22120.25 per wrong answer (objective sections)',
        structure:'Prelims: 100 marks. Mains: 200 objective + 30 descriptive = 230 marks, 170 questions, 3.5 hrs total. Phase III adds a Psychometric Test and Group Exercise alongside the Interview \u2014 a step IBPS PO doesn\u2019t have.',
        frequency:'Once a year, conducted directly by SBI (not IBPS).',
        posts:['Probationary Officer (PO)']
      },
      eligibilitySummary:'Bachelor\u2019s degree in any discipline. Age 21\u201330 years.',
      subjects:[
        {name:'Prelims', desc:'English Language, Quantitative Aptitude, Reasoning Ability.'},
        {name:'Mains \u2014 Objective', desc:'Reasoning & Computer Aptitude, Data Analysis & Interpretation (heavier weightage than IBPS), General/Economy/Banking Awareness, English Language.'},
        {name:'Mains \u2014 Descriptive', desc:'Letter Writing & Essay \u2014 30 marks.'}
      ],
      cutoff:{
        note:'SBI PO cutoff (General/UR category) has fluctuated more than IBPS PO in recent cycles \u2014 always check the specific year\u2019s official release.',
        cols:['Cycle','Prelims Cutoff (UR)','Mains Cutoff (UR)'],
        rows:[
          ['2023','59.25 / 100','70.00 / 100'],
          ['2024\u201325','Verification Required','87.50 / 100'],
          ['2025','66.75 / 100','75.00 / 100']
        ]
      },
      career:{
        path:'PO \u2192 confirmed Assistant Manager \u2192 Deputy Manager \u2192 Manager \u2192 Chief Manager \u2192 AGM and above \u2014 SBI\u2019s scale and brand make this one of the most sought-after banking career tracks in India.',
        salary:'Gross salary approx. ₹94,000\u201398,000/month at joining (higher than IBPS PO due to SBI-specific allowances).'
      }
    },
    sbiclerk: {
      icon:'🗂️', name:'SBI Clerk', sub:'Junior Associate',
      examDetails:{
        stages:['Prelims','Mains'],
        marking:'\u22120.25 per wrong answer',
        structure:'Similar two-stage CBT structure to IBPS Clerk \u2014 Prelims is qualifying only, Mains decides the final merit list. No interview.',
        frequency:'Once a year, conducted directly by SBI.',
        posts:['Junior Associate (Customer Support & Sales)']
      },
      eligibilitySummary:'Bachelor\u2019s degree in any discipline. Age 20\u201328 years.',
      subjects:[
        {name:'Prelims', desc:'English Language, Numerical Ability, Reasoning Ability.'},
        {name:'Mains', desc:'General/Financial Awareness, General English, Quantitative Aptitude, Reasoning Ability & Computer Aptitude.'}
      ],
      cutoff:{
        note:'Like SBI PO, SBI Clerk cutoff is released category-wise and (for the Mains stage) state-wise \u2014 confirm the specific state\u2019s cutoff before advising a student.',
        cols:['Scope','What Determines the Cutoff'],
        rows:[['State-wise, category-wise','Varies by state cadre and category \u2014 check the specific state\u2019s SBI Clerk merit list']]
      },
      career:{
        path:'Junior Associate \u2192 Senior Associate (with increments) \u2192 can appear for SBI PO or other internal exams to move into the officer cadre.',
        salary:'In-hand approx. ₹30,000\u201335,000/month depending on posting and allowances.'
      }
    },
    rbigradeb: {
      icon:'🏦', name:'RBI Grade B', sub:'Reserve Bank of India \u2014 Officer',
      examDetails:{
        stages:['Phase I (qualifying)','Phase II \u2014 3 papers','Interview'],
        marking:'\u22120.25 per wrong answer (objective sections)',
        structure:'Phase I: 200 objective marks (qualifying only, not added to final merit). Phase II: 3 papers of 100 marks each (Economic & Social Issues, English Writing Skills, Finance & Management or Economics/Statistics for DEPR/DSIM) = 300 marks. Interview: 75 marks. Final merit = Phase II (300) + Interview (75) = 375.',
        frequency:'Once a year, conducted directly by the Reserve Bank of India.',
        posts:['Grade \u2018B\u2019 Officer (DR) \u2014 General','DEPR (Dept. of Economic and Policy Research)','DSIM (Dept. of Statistics and Information Management)']
      },
      eligibilitySummary:'Bachelor\u2019s degree with a minimum 60% aggregate (50% for SC/ST/PwBD), or a Master\u2019s degree with 55%. Age 21\u201330 years. Note the 60% minimum \u2014 unlike IBPS/SBI, which have no minimum graduation percentage.',
      subjects:[
        {name:'Phase I', desc:'General Awareness, Quantitative Aptitude, Reasoning, English Language.'},
        {name:'Phase II \u2014 Paper 1', desc:'Economic & Social Issues \u2014 growth, development, social sector, globalisation.'},
        {name:'Phase II \u2014 Paper 2', desc:'English (Writing Skills) \u2014 essay, precis, comprehension.'},
        {name:'Phase II \u2014 Paper 3', desc:'Finance & Management (General stream) or Economics/Statistics (DEPR/DSIM streams).'}
      ],
      cutoff:{
        note:'RBI Grade B has very few vacancies relative to applicants (among the most competitive banking exams in India) \u2014 cutoff varies sharply year to year with vacancy count. Always confirm the current cycle\u2019s cutoff from the official RBI release rather than quoting an old figure.',
        cols:['Scope','What Determines the Cutoff'],
        rows:[['Category-wise, per cycle','Highly vacancy-dependent \u2014 2026 cycle had only 60 vacancies (a multi-year low), which sharply raises the effective cutoff']]
      },
      career:{
        path:'Grade B Officer \u2192 Grade C \u2192 Grade D and beyond \u2014 a regulatory/policy career at India\u2019s central bank, widely seen as the single most prestigious banking-sector job in the country.',
        salary:'Gross emoluments approx. ₹1,54,936/month at joining \u2014 significantly higher than SBI PO or IBPS PO.'
      }
    }
  };

  var EXAM_LIST = ['ibpspo','ibpsclerk','ibpsso','ibpsrrb','sbipo','sbiclerk','rbigradeb'];

  function overview(){
    var cards = EXAM_LIST.map(function(k){
      var e = BANKING_EXAMS[k];
      return '<button type="button" class="exam-icon-card" data-bk-exam="'+k+'">'+
        '<span class="exam-icon">'+e.icon+'</span>'+
        '<b>'+e.name+'</b>'+
        '<span>'+e.sub+'</span>'+
        '<em>Explore →</em>'+
      '</button>';
    }).join('');
    return `
      <section class="upsc-section" style="margin-top:28px;">
        <div class="cid-kicker">BANKING INTELLIGENCE</div>
        <h1 style="margin:8px 0 8px;">Banking & Finance Recruitment</h1>
        <p class="sub">The major Public Sector Bank and RBI recruitment routes \u2014 Probationary Officer, Clerk, Specialist Officer and Regional Rural Bank entries.</p>
        <div class="exam-icon-grid" style="margin-top:22px;">${cards}</div>
      </section>`;
  }

  function examOverview(key){
    var e = BANKING_EXAMS[key];
    if(!e) return overview();
    var sections = [
      { key:'exam', icon:'📋', title:'Exam Details & Pattern', desc:'Stages, structure, marking scheme and frequency.' },
      { key:'eligibility', icon:'✅', title:'Eligibility Criterion', desc:'Education, age band and an interactive quick-check tool.' },
      { key:'subjects', icon:'📚', title:'Syllabus', desc:'Section-wise topics tested at each stage.' },
      { key:'cutoff', icon:'📊', title:'Cut-off (Last 3 Years)', desc:'Recent cutoff trend and how it\u2019s actually segmented.' },
      { key:'career', icon:'💼', title:'Career Options & Salary', desc:'Promotion path, pay scale and in-hand salary.' }
    ];
    var cardsHTML = sections.map(function(s){
      return '<button class="upsc-module" type="button" data-bk-section="'+key+':'+s.key+'"><div class="i">'+s.icon+'</div><h3>'+s.title+'</h3><p>'+s.desc+'</p></button>';
    }).join('');
    return back('Banking Overview', 'overview') + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">BANKING</div>
        <h2>${e.icon} ${e.name}</h2>
        <p class="sub">${e.sub}</p>
        <div class="upsc-grid" style="margin-top:22px;">${cardsHTML}</div>
      </section>`;
  }

  function chipList(items){
    return '<div class="ca-topic-chips">' + items.map(function(t){ return '<span class="ca-topic-chip">'+t+'</span>'; }).join('') + '</div>';
  }

  function examDetailsBody(e){
    return '<div class="ca-detail-block"><div class="ca-step-label">Stages</div><div class="ca-step-card">'+
        '<div class="exam-stage-flow">'+e.examDetails.stages.map(function(s,i){ return (i>0?'<span class="exam-stage-arrow">→</span>':'')+'<span class="exam-stage-chip">'+s+'</span>'; }).join('')+'</div>'+
      '</div></div>'+
      '<div class="ca-detail-block"><div class="ca-step-label">Marking</div><div class="ca-step-card"><span class="exam-marking-badge">'+e.examDetails.marking+'</span></div></div>'+
      '<div class="ca-detail-block"><div class="ca-step-label">Structure</div><div class="ca-step-card">'+e.examDetails.structure+'</div></div>'+
      '<div class="ca-detail-block"><div class="ca-step-label">Frequency</div><div class="ca-step-card">'+e.examDetails.frequency+'</div></div>'+
      '<div class="ca-detail-block"><div class="ca-step-label">Posts</div><div class="ca-step-card">'+chipList(e.examDetails.posts)+'</div></div>';
  }

  function subjectsBody(e){
    return e.subjects.map(function(s){
      return '<div class="ca-detail-block"><div class="ca-step-label">'+s.name+'</div><div class="ca-step-card">'+s.desc+'</div></div>';
    }).join('');
  }

  function cutoffBody(e){
    var c = e.cutoff;
    var head = '<tr>'+c.cols.map(function(h){ return '<th>'+h+'</th>'; }).join('')+'</tr>';
    var rows = c.rows.map(function(r){
      return '<tr>'+r.map(function(v){ return '<td><span class="mba-cutoff-badge">'+v+'</span></td>'; }).join('')+'</tr>';
    }).join('');
    return '<div class="ca-detail-block"><div class="ca-step-card">'+
      '<div style="overflow:auto;"><table class="mba-cutoff-table"><thead>'+head+'</thead><tbody>'+rows+'</tbody></table></div>'+
      '<div class="ca-step-note" style="margin-top:10px;">'+c.note+'</div>'+
    '</div></div>';
  }

  function careerBody(e){
    return '<div class="ca-detail-block"><div class="ca-step-label">Career Path</div><div class="ca-step-card">'+e.career.path+'</div></div>'+
      '<div class="ca-detail-block"><div class="ca-step-label">Salary</div><div class="ca-step-card"><span class="exam-marking-badge" style="background:#fff3dc;color:#8a5a08;">'+e.career.salary+'</span></div></div>';
  }

  function eligibilityBody(key, e){
    var checkerHTML =
      '<div class="df-checker"><div class="bk-check-grid">'+
        '<div class="df-field"><label>Date of Birth</label><input id="bkDob" type="date"></div>'+
        '<div class="df-field"><label>Education Status</label><select id="bkEdu"><option value="completed">Degree Completed</option><option value="final">Final Year / Appearing</option><option value="notyet">Not Yet Graduate</option></select></div>'+
      '</div>'+
      '<div class="upsc-checker-actions"><button class="upsc-check-btn" id="bkCheckBtn">Check Eligibility</button><button class="upsc-reset-btn" id="bkResetBtn">Reset</button></div>'+
      '<div id="bkEligibilityResult" class="upsc-check-result"></div></div>';
    return '<div class="ca-detail-block"><div class="ca-step-label">At a Glance</div><div class="ca-step-card">'+e.eligibilitySummary+'</div></div>'+
      '<div class="ca-detail-block"><div class="ca-step-label">Quick Eligibility Checker</div>'+checkerHTML+
      '<div class="ca-step-note">This is a directional quick-check for counselling conversations \u2014 always confirm against the live official notification before giving a final answer.</div></div>';
  }

  var AGE_BANDS = {
    ibpspo:[20,30], ibpsclerk:[20,28], ibpsso:[20,30],
    ibpsrrb:[18,30], sbipo:[21,30], sbiclerk:[20,28], rbigradeb:[21,30]
  };

  function ageOn(dobStr, refDate){
    var d = new Date(dobStr+'T00:00:00');
    var age = refDate.getFullYear() - d.getFullYear();
    if(refDate.getMonth() < d.getMonth() || (refDate.getMonth() === d.getMonth() && refDate.getDate() < d.getDate())) age--;
    return age;
  }

  function bindChecker(key){
    var checkBtn = document.getElementById('bkCheckBtn');
    var resetBtn = document.getElementById('bkResetBtn');
    if(!checkBtn) return;
    var today = new Date();
    checkBtn.onclick = function(){
      var out = document.getElementById('bkEligibilityResult');
      var dob = document.getElementById('bkDob').value;
      if(!dob){
        out.className = 'upsc-check-result show warn';
        out.innerHTML = '<div class="upsc-result-title">Enter Date of Birth</div><div class="upsc-result-sub">Please select a DOB to calculate age eligibility.</div>';
        return;
      }
      var age = ageOn(dob, today);
      var edu = document.getElementById('bkEdu').value;
      var band = AGE_BANDS[key];
      var ok = true, reasons = [];
      if(age < band[0] || age > band[1]){ ok = false; reasons.push('Age must be between '+band[0]+' and '+band[1]+' years (currently '+age+').'); }
      if(edu === 'notyet'){ ok = false; reasons.push('Must hold (or be in the final year of) a Bachelor\u2019s degree.'); }
      var stats = [['Age Today', age+' years'], ['Age Band', band[0]+'\u2013'+band[1]+' yrs'], ['Education', edu === 'completed' ? 'Completed' : (edu === 'final' ? 'Final Year' : 'Not Yet Graduate')]];
      out.className = 'upsc-check-result show ' + (ok ? 'ok' : 'no');
      out.innerHTML = '<div class="upsc-result-title">'+(ok ? 'Eligible for quick check' : 'Not Eligible for quick check')+'</div>'+
        '<div class="upsc-result-sub">'+(ok ? 'Age and education conditions are within the selected limits.' : reasons.join(' '))+'</div>'+
        '<div class="upsc-result-grid">'+stats.map(function(s){ return '<div class="upsc-result-stat"><span>'+s[0]+'</span><b>'+s[1]+'</b></div>'; }).join('')+'</div>';
    };
    if(resetBtn){
      resetBtn.onclick = function(){
        var dobEl = document.getElementById('bkDob'); if(dobEl) dobEl.value = '';
        var out = document.getElementById('bkEligibilityResult'); if(out) out.className = 'upsc-check-result';
      };
    }
  }

  function sectionDetail(examKey, section){
    var e = BANKING_EXAMS[examKey];
    if(!e) return overview();
    var title = '', body = '';
    if(section === 'exam'){ title = 'Exam Details & Pattern'; body = examDetailsBody(e); }
    else if(section === 'eligibility'){ title = 'Eligibility Criterion'; body = eligibilityBody(examKey, e); }
    else if(section === 'subjects'){ title = 'Syllabus'; body = subjectsBody(e); }
    else if(section === 'cutoff'){ title = 'Cut-off (Last 3 Years)'; body = cutoffBody(e); }
    else if(section === 'career'){ title = 'Career Options & Salary'; body = careerBody(e); }
    return back(e.name, examKey) + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">${e.name.toUpperCase()}</div>
        <h2>${title}</h2>
        ${body}
      </section>`;
  }

  function bind(){
    var r = root();
    if(!r) return;
    r.querySelectorAll('[data-bk-exam]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-bk-exam')); };
    });
    r.querySelectorAll('[data-bk-section]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-bk-section')); };
    });
    r.querySelectorAll('[data-bk-back]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-bk-back')); };
    });
    var elBody = r.querySelector('#bkCheckBtn');
    if(elBody){
      var currentView = r.getAttribute('data-current-view') || '';
      var parts = currentView.split(':');
      if(parts[1] === 'eligibility') bindChecker(parts[0]);
    }
  }

  function render(view){
    var r = root();
    if(!r) return;
    r.style.display = 'block';
    if(view && view.indexOf(':') > -1){
      var parts = view.split(':');
      r.innerHTML = sectionDetail(parts[0], parts[1]);
      r.setAttribute('data-current-view', view);
    } else if(view && BANKING_EXAMS[view]){
      r.innerHTML = examOverview(view);
      r.setAttribute('data-current-view', view);
    } else {
      r.innerHTML = overview();
      r.setAttribute('data-current-view', 'overview');
    }
    bind();
  }

  var previousOpenCategory = window.cidOpenCategory;
  window.cidOpenCategory = function(name){
    if(name === 'Banking'){
      document.body.classList.remove('cid-home-mode');
      document.body.classList.add('cid-category-mode');
      if(typeof window.cidRenderCategorySidebar === 'function'){
        window.cidRenderCategorySidebar('Banking', 'Banking & Finance', [
          {key:'overview', label:'Banking Overview'},
          {key:'ibpspo', label:'IBPS PO'},
          {key:'ibpsclerk', label:'IBPS Clerk'},
          {key:'ibpsso', label:'IBPS SO'},
          {key:'ibpsrrb', label:'IBPS RRB'},
          {key:'sbipo', label:'SBI PO'},
          {key:'sbiclerk', label:'SBI Clerk'},
          {key:'rbigradeb', label:'RBI Grade B'}
        ], 'overview', function(key){
          for(var i=0;i<2;i++){
            var backBtn = document.querySelector('[data-bk-back]');
            if(backBtn) backBtn.click();
          }
          if(key !== 'overview'){
            var openBtn = document.querySelector('[data-bk-exam="'+key+'"]');
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
        if(label) label.textContent = 'Banking';
      }
      render('overview');
      return;
    }
    if(typeof previousOpenCategory === 'function') return previousOpenCategory(name);
  };
})();
