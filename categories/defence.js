// Category module extracted from index.html.

(function(){
  function root(){ return document.getElementById('pageRoot'); }
  function back(label, target){ return '<button class="cid-back" type="button" data-df-back="'+target+'" style="margin-top:22px;">← Back to '+label+'</button>'; }

  var DEFENCE_EXAMS = {
    nda: {
      icon:'🎖️', name:'NDA', sub:'National Defence Academy',
      examDetails:{
        level:'Entry straight after Class 12 \u2014 the earliest officer-entry route into the Army, Navy or Air Force.',
        stages:['Written (Maths + GAT)','SSB Interview','Medical'],
        marking:'Maths: \u22120.83/wrong \u00b7 GAT: \u22121.33/wrong (1/3rd deduction)',
        structure:'Written 900 marks (Maths 300 + GAT 600) + SSB 900 marks = 1800 total.',
        frequency:'Twice a year \u2014 NDA 1 and NDA 2, conducted by UPSC.',
        posts:['Indian Army (IMA)','Indian Navy (INA)','Indian Air Force (AFA)']
      },
      eligibilitySummary:'12th pass or appearing (Physics & Maths compulsory for Army/Navy/Air Force wings). Age 16.5\u201319.5 years. Must be unmarried \u2014 marriage during training leads to discharge.',
      subjects:[
        {name:'Mathematics', desc:'Algebra, calculus, trigonometry, analytic geometry, vectors, statistics \u2014 Class 11\u201312 level.'},
        {name:'English (GAT Part A)', desc:'Grammar, vocabulary, comprehension \u2014 200 of the 600 GAT marks.'},
        {name:'General Knowledge (GAT Part B)', desc:'Physics, Chemistry, General Science, History, Geography, Current Affairs \u2014 400 of the 600 GAT marks.'}
      ],
      cutoff:{
        type:'general',
        note:'NDA does not publish a category-wise (Gen/OBC/SC/ST) written cutoff \u2014 UPSC releases one cutoff per exam cycle (NDA 1 and NDA 2 separately), applicable across categories. NDA 1 figures below are officially confirmed; NDA 2 figures are the commonly reported range pending exact confirmation \u2014 verify against the live UPSC release.',
        rows:[
          ['NDA 1 2024','360 / 900 (confirmed)','683 / 1800 (confirmed)'],
          ['NDA 2 2024','~354\u2013364 / 900 (reported range)','~709\u2013719 / 1800 (reported range)'],
          ['NDA 1 2025','370 / 900 (confirmed)','688 / 1800 (confirmed)'],
          ['NDA 2 2025','~365\u2013375 / 900 (reported range)','~710\u2013720 / 1800 (reported range)']
        ],
        cols:['Cycle','Written Cutoff','Final Cutoff (Written+SSB)']
      }
    },
    cds: {
      icon:'🪖', name:'CDS', sub:'Combined Defence Services',
      examDetails:{
        level:'Graduate-entry route into the Army, Navy, Air Force or Short Service Commission.',
        stages:['Written (English + GK + Maths, or English + GK for OTA)','SSB Interview','Medical'],
        marking:'\u22121/3 per wrong answer',
        structure:'IMA/INA/AFA: 3 papers \u00d7 100 marks = 300, + SSB 300 marks. OTA: 2 papers \u00d7 100 = 200 (no Maths), + SSB 200 marks.',
        frequency:'Twice a year, conducted by UPSC.',
        posts:['IMA (Army)','INA (Navy)','AFA (Air Force)','OTA (Short Service Commission)']
      },
      eligibilitySummary:'Bachelor\u2019s degree (Engineering required for INA; any degree for IMA/OTA). Age: IMA/INA/AFA 19\u201324 years, OTA 19\u201325 years. Women eligible for all four academies.',
      subjects:[
        {name:'English', desc:'Grammar, vocabulary, comprehension \u2014 100 marks, common to all academies.'},
        {name:'General Knowledge', desc:'Current affairs, history, geography, polity, science \u2014 100 marks, common to all academies.'},
        {name:'Elementary Mathematics', desc:'Class 10 level \u2014 100 marks. Not required for OTA.'}
      ],
      cutoff:{
        type:'academy-year',
        note:'UPSC releases the CDS cutoff by academy (IMA/INA/AFA/OTA), not by social category \u2014 this is the actual, meaningful segmentation for this exam. Select a year to see that cycle\u2019s official written cutoff and final merit score (last recommended candidate) per academy.',
        byYear:{
          '2025 (CDS 1)': [
            ['IMA','120 / 300','243 / 600'],
            ['INA','104 / 300','230 / 600'],
            ['AFA','128 / 300','253 / 600'],
            ['OTA (Men)','81 / 200','163 / 400'],
            ['OTA (Women)','81 / 200','171 / 400']
          ],
          '2024 (CDS 2)': [
            ['IMA','117 / 300','241 / 600'],
            ['INA','90 / 300','220 / 600'],
            ['AFA','126 / 300','Verification Required'],
            ['OTA (Men)','Verification Required','Verification Required'],
            ['OTA (Women)','Verification Required','Verification Required']
          ]
        },
        cols:['Academy','Written Cutoff','Final Merit Score (Last Recommended)']
      }
    },
    afcat: {
      icon:'✈️', name:'AFCAT', sub:'Air Force Common Admission Test',
      examDetails:{
        level:'Graduate-entry route into the Indian Air Force \u2014 open to both technical and non-technical graduates.',
        stages:['AFCAT CBT','EKT (Technical branch only)','AFSB Interview','Medical'],
        marking:'+3 correct, \u22121 wrong',
        structure:'AFCAT: 100 questions/300 marks/2 hrs. EKT (if applicable): 50 questions/150 marks/45 min, no negative marking.',
        frequency:'Twice a year, conducted by the Indian Air Force.',
        posts:['Flying Branch','Ground Duty (Technical)','Ground Duty (Non-Technical)']
      },
      eligibilitySummary:'Flying & Ground Duty (Non-Technical): 50%+ in Physics & Maths at 12th + Bachelor\u2019s degree (60%+ for Engineering). Ground Duty (Technical): 60%+ in Physics & Maths at 12th + Engineering degree. Age: Flying 20\u201324 yrs (up to 26 with a DGCA CPL), Ground Duty (Technical & Non-Technical) 20\u201326 yrs.',
      subjects:[
        {name:'General Awareness', desc:'Current affairs, history, geography, polity, defence-related GK.'},
        {name:'Verbal Ability (English)', desc:'Comprehension, error-spotting, fill-in-the-blanks, synonyms/antonyms.'},
        {name:'Numerical Ability', desc:'Basic arithmetic, percentage, ratio, averages, time-speed-distance.'},
        {name:'Reasoning & Military Aptitude', desc:'Verbal & non-verbal reasoning, spatial ability, military-situation judgement.'}
      ],
      cutoff:{
        type:'general',
        note:'AFCAT cutoff is released per cycle (not by social category) and varies by branch \u2014 Flying Branch typically runs highest, Ground Duty Non-Technical lowest. Rows below are the confirmed overall AFCAT cutoffs for the last 3 released cycles (out of 300).',
        rows:[
          ['AFCAT 2 2024','139 / 300'],
          ['AFCAT 1 2025','121 / 300'],
          ['AFCAT 1 2026','110 / 300']
        ],
        cols:['Cycle','Cutoff (Written)']
      }
    },
    agniveer: {
      icon:'🪙', name:'Agniveer', sub:'Agnipath Scheme \u2014 Soldier/Sailor/Airman entry',
      examDetails:{
        level:'4-year short service scheme for soldier/sailor/airman-level entry \u2014 Army, Navy and Air Force each run their own separately-notified recruitment.',
        stages:['CEE (Computer-Based Test)','Physical Fitness Test','Medical Examination','Document Verification'],
        marking:'\u22120.5 per wrong answer (varies slightly by category)',
        structure:'CEE: 50 MCQs / 100 marks / 60 minutes (post-wise weightage on Science/GK/Maths varies by category).',
        frequency:'Held periodically through the year; Army, Navy and Air Force notify separately.',
        posts:['Agniveer GD','Agniveer Technical','Agniveer Clerk/Store Keeper','Agniveer Tradesman']
      },
      eligibilitySummary:'GD: 10th pass, 45% aggregate + 33% per subject. Technical: 12th pass with Physics, Chemistry, Maths & English. Clerk/Store Keeper: 12th pass, 60% aggregate + 50% per subject. Age: 17.5\u201321 years for most categories (some categories differ) \u2014 roughly 25% of Agniveers are retained as permanent regular cadre after 4 years.',
      subjects:[
        {name:'General Science', desc:'Physics, Chemistry, Biology basics \u2014 weighted highest for GD (40%).'},
        {name:'General Knowledge', desc:'Current affairs, history, geography, civics.'},
        {name:'Mathematics/Reasoning', desc:'Weightage and depth vary by category \u2014 heaviest for Technical (~60% combined with Science).'}
      ],
      cutoff:{
        type:'general',
        note:'Agniveer does not have one national cutoff \u2014 the Army releases merit lists per recruiting Zone (state/region) and category, similar to how RRB/SSC GD cutoffs work. A student\u2019s actual qualifying score depends on their specific Zone Recruiting Office\u2019s rally and vacancy count that cycle.',
        rows:[
          ['All zones/categories','Varies by Zone Recruiting Office and category \u2014 check the specific Rally/ARO notification']
        ],
        cols:['Scope','What Determines the Cutoff']
      }
    }
  };

  var EXAM_LIST = ['nda','cds','afcat','agniveer'];

  function overview(){
    var cards = EXAM_LIST.map(function(k){
      var e = DEFENCE_EXAMS[k];
      return '<button type="button" class="exam-icon-card" data-df-exam="'+k+'">'+
        '<span class="exam-icon">'+e.icon+'</span>'+
        '<b>'+e.name+'</b>'+
        '<span>'+e.sub+'</span>'+
        '<em>Explore →</em>'+
      '</button>';
    }).join('');
    return `
      <section class="upsc-section" style="margin-top:28px;">
        <div class="cid-kicker">DEFENCE INTELLIGENCE</div>
        <h1 style="margin:8px 0 8px;">Defence Entrance & Recruitment</h1>
        <p class="sub">Officer entry (NDA, CDS, AFCAT) and soldier/sailor/airman entry (Agniveer) into the Indian Armed Forces.</p>
        <div class="exam-icon-grid" style="margin-top:22px;">${cards}</div>
      </section>`;
  }

  function examOverview(key){
    var e = DEFENCE_EXAMS[key];
    if(!e) return overview();
    var sections = [
      { key:'exam', icon:'📋', title:'Exam Details', desc:'Stages, marking scheme, structure and frequency.' },
      { key:'eligibility', icon:'✅', title:'Eligibility Criterion', desc:'Education, age band and an interactive quick-check tool.' },
      { key:'subjects', icon:'📚', title:'Subjects & Syllabus', desc:'Section-wise topics tested in the written exam.' },
      { key:'cutoff', icon:'📊', title:'Cut-off (Last 3 Years)', desc:'Recent cutoff trend and how it\u2019s actually segmented.' }
    ];
    var cardsHTML = sections.map(function(s){
      return '<button class="upsc-module" type="button" data-df-section="'+key+':'+s.key+'"><div class="i">'+s.icon+'</div><h3>'+s.title+'</h3><p>'+s.desc+'</p></button>';
    }).join('');
    return back('Defence Overview', 'overview') + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">DEFENCE</div>
        <h2>${e.icon} ${e.name}</h2>
        <p class="sub">${e.sub}</p>
        <div class="upsc-grid" style="margin-top:22px;">${cardsHTML}</div>
      </section>`;
  }

  function chipList(items){
    return '<div class="ca-topic-chips">' + items.map(function(t){ return '<span class="ca-topic-chip">'+t+'</span>'; }).join('') + '</div>';
  }

  function examDetailsBody(e){
    return '<div class="ca-detail-block"><div class="ca-step-label">Level</div><div class="ca-step-card">'+e.examDetails.level+'</div></div>'+
      '<div class="ca-detail-block"><div class="ca-step-label">Stages</div><div class="ca-step-card">'+
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

  function cutoffTableHTML(cols, rows){
    var head = '<tr>'+cols.map(function(h){ return '<th>'+h+'</th>'; }).join('')+'</tr>';
    var body = rows.map(function(r){
      return '<tr>'+r.map(function(v){ return '<td><span class="mba-cutoff-badge">'+v+'</span></td>'; }).join('')+'</tr>';
    }).join('');
    return '<table class="mba-cutoff-table"><thead>'+head+'</thead><tbody>'+body+'</tbody></table>';
  }

  function cutoffBody(e){
    var c = e.cutoff;
    if(c.type === 'academy-year'){
      var years = Object.keys(c.byYear);
      var options = years.map(function(y,i){ return '<option value="'+y+'"'+(i===0?' selected':'')+'>'+y+'</option>'; }).join('');
      return '<div class="ca-detail-block">'+
        '<div class="ca-step-label">Select Year</div>'+
        '<div class="ca-step-card">'+
          '<div class="df-field" style="max-width:260px;"><select id="dfCutoffYear">'+options+'</select></div>'+
          '<div style="overflow:auto;margin-top:14px;" id="dfCutoffTableWrap">'+cutoffTableHTML(c.cols, c.byYear[years[0]])+'</div>'+
          '<div class="ca-step-note" style="margin-top:10px;">'+c.note+'</div>'+
        '</div>'+
      '</div>';
    }
    return '<div class="ca-detail-block"><div class="ca-step-card">'+
      '<div style="overflow:auto;">'+cutoffTableHTML(c.cols, c.rows)+'</div>'+
      '<div class="ca-step-note" style="margin-top:10px;">'+c.note+'</div>'+
    '</div></div>';
  }

  // ---- Eligibility Checkers ----
  function eligibilityBody(key, e){
    var checkerHTML = '';
    if(key === 'nda'){
      checkerHTML =
        '<div class="df-checker"><div class="df-check-grid">'+
          '<div class="df-field"><label>Date of Birth</label><input id="dfDob" type="date"></div>'+
          '<div class="df-field"><label>Education Status</label><select id="dfEdu"><option value="pass">12th Pass</option><option value="appearing">12th Appearing</option><option value="notyet">Below 12th</option></select></div>'+
          '<div class="df-field"><label>Marital Status</label><select id="dfMarital"><option value="single">Unmarried</option><option value="married">Married</option></select></div>'+
        '</div>'+
        '<div class="upsc-checker-actions"><button class="upsc-check-btn" id="dfCheckBtn">Check Eligibility</button><button class="upsc-reset-btn" id="dfResetBtn">Reset</button></div>'+
        '<div id="dfEligibilityResult" class="upsc-check-result"></div></div>';
    } else if(key === 'cds'){
      checkerHTML =
        '<div class="df-checker"><div class="df-check-grid">'+
          '<div class="df-field"><label>Date of Birth</label><input id="dfDob" type="date"></div>'+
          '<div class="df-field"><label>Academy</label><select id="dfAcademy"><option value="IMA">IMA (Army)</option><option value="INA">INA (Navy)</option><option value="AFA">AFA (Air Force)</option><option value="OTA">OTA (Short Service Commission)</option></select></div>'+
          '<div class="df-field"><label>Education Status</label><select id="dfEdu"><option value="completed">Graduation Completed</option><option value="final">Final Year / Appearing</option><option value="notyet">Not Yet Graduate</option></select></div>'+
        '</div>'+
        '<div class="upsc-checker-actions"><button class="upsc-check-btn" id="dfCheckBtn">Check Eligibility</button><button class="upsc-reset-btn" id="dfResetBtn">Reset</button></div>'+
        '<div id="dfEligibilityResult" class="upsc-check-result"></div></div>';
    } else if(key === 'afcat'){
      checkerHTML =
        '<div class="df-checker"><div class="df-check-grid">'+
          '<div class="df-field"><label>Date of Birth</label><input id="dfDob" type="date"></div>'+
          '<div class="df-field"><label>Branch</label><select id="dfBranch"><option value="flying">Flying Branch</option><option value="gdt">Ground Duty (Technical)</option><option value="gdnt">Ground Duty (Non-Technical)</option></select></div>'+
          '<div class="df-field"><label>Education Status</label><select id="dfEdu"><option value="completed">Degree Completed (meets % criteria)</option><option value="final">Final Year / Appearing</option><option value="notyet">Doesn\u2019t Meet Degree/% Criteria</option></select></div>'+
        '</div>'+
        '<div class="upsc-checker-actions"><button class="upsc-check-btn" id="dfCheckBtn">Check Eligibility</button><button class="upsc-reset-btn" id="dfResetBtn">Reset</button></div>'+
        '<div id="dfEligibilityResult" class="upsc-check-result"></div></div>';
    } else if(key === 'agniveer'){
      checkerHTML =
        '<div class="df-checker"><div class="df-check-grid">'+
          '<div class="df-field"><label>Date of Birth</label><input id="dfDob" type="date"></div>'+
          '<div class="df-field"><label>Category</label><select id="dfCategory"><option value="gd">Agniveer GD</option><option value="tech">Agniveer Technical</option><option value="clerk">Agniveer Clerk/Store Keeper</option><option value="tradesman">Agniveer Tradesman</option></select></div>'+
          '<div class="df-field"><label>Education Status</label><select id="dfEdu"><option value="meets">Meets the category\u2019s education requirement</option><option value="notmeets">Doesn\u2019t meet it yet</option></select></div>'+
        '</div>'+
        '<div class="upsc-checker-actions"><button class="upsc-check-btn" id="dfCheckBtn">Check Eligibility</button><button class="upsc-reset-btn" id="dfResetBtn">Reset</button></div>'+
        '<div id="dfEligibilityResult" class="upsc-check-result"></div></div>';
    }
    return '<div class="ca-detail-block"><div class="ca-step-label">At a Glance</div><div class="ca-step-card">'+e.eligibilitySummary+'</div></div>'+
      '<div class="ca-detail-block"><div class="ca-step-label">Quick Eligibility Checker</div>'+checkerHTML+
      '<div class="ca-step-note">This is a directional quick-check for counselling conversations \u2014 always confirm against the live official notification before giving a final answer, especially for branch-specific physical/medical standards.</div></div>';
  }

  function ageOn(dobStr, refDate){
    var d = new Date(dobStr+'T00:00:00');
    var age = refDate.getFullYear() - d.getFullYear();
    if(refDate.getMonth() < d.getMonth() || (refDate.getMonth() === d.getMonth() && refDate.getDate() < d.getDate())) age--;
    return age;
  }

  function bindChecker(key){
    var checkBtn = document.getElementById('dfCheckBtn');
    var resetBtn = document.getElementById('dfResetBtn');
    if(!checkBtn) return;
    var today = new Date();

    checkBtn.onclick = function(){
      var out = document.getElementById('dfEligibilityResult');
      var dob = document.getElementById('dfDob').value;
      if(!dob){
        out.className = 'upsc-check-result show warn';
        out.innerHTML = '<div class="upsc-result-title">Enter Date of Birth</div><div class="upsc-result-sub">Please select a DOB to calculate age eligibility.</div>';
        return;
      }
      var age = ageOn(dob, today);
      var ok = true, reasons = [], stats = [];

      if(key === 'nda'){
        var edu = document.getElementById('dfEdu').value;
        var marital = document.getElementById('dfMarital').value;
        if(age < 16.5 || age > 19.5){ ok = false; reasons.push('Age must be between 16.5 and 19.5 years (currently '+age+').'); }
        if(edu === 'notyet'){ ok = false; reasons.push('Must have passed or be appearing for Class 12.'); }
        if(marital === 'married'){ ok = false; reasons.push('NDA requires candidates to be unmarried.'); }
        stats = [['Age Today', age+' years'], ['Age Band', '16.5\u201319.5 yrs'], ['Education', edu === 'pass' ? '12th Pass' : (edu === 'appearing' ? '12th Appearing' : 'Below 12th')]];
      } else if(key === 'cds'){
        var academy = document.getElementById('dfAcademy').value;
        var edu2 = document.getElementById('dfEdu').value;
        var bands = { IMA:[19,24], INA:[19,24], AFA:[19,24], OTA:[19,25] };
        var band = bands[academy];
        if(age < band[0] || age > band[1]){ ok = false; reasons.push('Age must be between '+band[0]+' and '+band[1]+' years for '+academy+' (currently '+age+').'); }
        if(edu2 === 'notyet'){ ok = false; reasons.push('Must hold (or be in the final year of) a Bachelor\u2019s degree.'); }
        stats = [['Age Today', age+' years'], ['Age Band', band[0]+'\u2013'+band[1]+' yrs'], ['Academy', academy]];
      } else if(key === 'afcat'){
        var branch = document.getElementById('dfBranch').value;
        var edu3 = document.getElementById('dfEdu').value;
        var bands3 = { flying:[20,24], gdt:[20,26], gdnt:[20,26] };
        var band3 = bands3[branch];
        if(age < band3[0] || age > band3[1]){ ok = false; reasons.push('Age must be between '+band3[0]+' and '+band3[1]+' years for this branch (currently '+age+'; Flying Branch can extend to 26 with a DGCA CPL).'); }
        if(edu3 === 'notyet'){ ok = false; reasons.push('Must meet the branch\u2019s degree and 12th Physics/Maths percentage requirement.'); }
        stats = [['Age Today', age+' years'], ['Age Band', band3[0]+'\u2013'+band3[1]+' yrs'], ['Branch', branch === 'flying' ? 'Flying' : (branch === 'gdt' ? 'Ground Duty (Tech)' : 'Ground Duty (Non-Tech)')]];
      } else if(key === 'agniveer'){
        var cat = document.getElementById('dfCategory').value;
        var edu4 = document.getElementById('dfEdu').value;
        if(age < 17.5 || age > 21){ ok = false; reasons.push('Age must be between 17.5 and 21 years for most Agniveer categories (currently '+age+'; some categories may differ \u2014 confirm from the live notification).'); }
        if(edu4 === 'notmeets'){ ok = false; reasons.push('Must meet the specific education requirement for the chosen category.'); }
        stats = [['Age Today', age+' years'], ['Age Band', '17.5\u201321 yrs (typical)'], ['Category', cat]];
      }

      out.className = 'upsc-check-result show ' + (ok ? 'ok' : 'no');
      out.innerHTML = '<div class="upsc-result-title">'+(ok ? 'Eligible for quick check' : 'Not Eligible for quick check')+'</div>'+
        '<div class="upsc-result-sub">'+(ok ? 'Age and education conditions are within the selected limits.' : reasons.join(' '))+'</div>'+
        '<div class="upsc-result-grid">'+stats.map(function(s){ return '<div class="upsc-result-stat"><span>'+s[0]+'</span><b>'+s[1]+'</b></div>'; }).join('')+'</div>';
    };

    if(resetBtn){
      resetBtn.onclick = function(){
        var dobEl = document.getElementById('dfDob'); if(dobEl) dobEl.value = '';
        var out = document.getElementById('dfEligibilityResult'); if(out) out.className = 'upsc-check-result';
      };
    }
  }

  function sectionDetail(examKey, section){
    var e = DEFENCE_EXAMS[examKey];
    if(!e) return overview();
    var title = '', body = '';
    if(section === 'exam'){ title = 'Exam Details'; body = examDetailsBody(e); }
    else if(section === 'eligibility'){ title = 'Eligibility Criterion'; body = eligibilityBody(examKey, e); }
    else if(section === 'subjects'){ title = 'Subjects & Syllabus'; body = subjectsBody(e); }
    else if(section === 'cutoff'){ title = 'Cut-off (Last 3 Years)'; body = cutoffBody(e); }

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
    r.querySelectorAll('[data-df-exam]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-df-exam')); };
    });
    r.querySelectorAll('[data-df-section]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-df-section')); };
    });
    r.querySelectorAll('[data-df-back]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-df-back')); };
    });
    var elBody = r.querySelector('#dfCheckBtn');
    if(elBody){
      var currentView = r.getAttribute('data-current-view') || '';
      var parts = currentView.split(':');
      if(parts[1] === 'eligibility') bindChecker(parts[0]);
    }
    var yearSelect = r.querySelector('#dfCutoffYear');
    if(yearSelect){
      var cvParts = (r.getAttribute('data-current-view') || '').split(':');
      var examKey = cvParts[0];
      yearSelect.onchange = function(){
        var e = DEFENCE_EXAMS[examKey];
        var wrap = document.getElementById('dfCutoffTableWrap');
        if(e && wrap) wrap.innerHTML = cutoffTableHTML(e.cutoff.cols, e.cutoff.byYear[this.value]);
      };
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
    } else if(view && DEFENCE_EXAMS[view]){
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
    if(name === 'DEFENCE'){
      document.body.classList.remove('cid-home-mode');
      document.body.classList.add('cid-category-mode');
      if(typeof window.cidRenderCategorySidebar === 'function'){
        window.cidRenderCategorySidebar('Defence', 'Armed Forces Entry', [
          {key:'overview', label:'Defence Overview'},
          {key:'nda', label:'NDA'},
          {key:'cds', label:'CDS'},
          {key:'afcat', label:'AFCAT'},
          {key:'agniveer', label:'Agniveer'}
        ], 'overview', function(key){
          for(var i=0;i<2;i++){
            var backBtn = document.querySelector('[data-df-back]');
            if(backBtn) backBtn.click();
          }
          if(key !== 'overview'){
            var openBtn = document.querySelector('[data-df-exam="'+key+'"]');
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
        if(label) label.textContent = 'Defence';
      }
      render('overview');
      return;
    }
    if(typeof previousOpenCategory === 'function') return previousOpenCategory(name);
  };
})();
