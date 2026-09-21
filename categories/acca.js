// Category module extracted from index.html.

(function(){
  function root(){ return document.getElementById('pageRoot'); }
  function back(label, target){ return '<button class="cid-back" type="button" data-acca-back="'+target+'" style="margin-top:22px;">← Back to '+label+'</button>'; }

  function roadmapHTML(){
    return '<div class="acca-roadmap">'+
      '<div class="acca-road-node acca-road-highlight">ACCA</div>'+
      '<div class="acca-road-fork">'+
        '<div class="acca-road-branch"><div class="acca-road-node">FIA<br><small>If you don\u2019t meet minimum entry requirements</small></div></div>'+
        '<div class="acca-road-branch"><div class="acca-road-node acca-road-highlight">ACCA Qualification<br><small>Direct entry with a degree/relevant quals</small></div></div>'+
      '</div>'+
      '<div class="acca-road-line"></div>'+
      '<div class="acca-road-node">Applied Knowledge<br><small>BT &middot; MA &middot; FA</small></div>'+
      '<div class="acca-road-line"></div>'+
      '<div class="acca-road-node">Applied Skills<br><small>LW &middot; PM &middot; TX &middot; FR &middot; AA &middot; FM</small></div>'+
      '<div class="acca-road-line"></div>'+
      '<div class="acca-road-node">Ethics &amp; Professional Skills Module</div>'+
      '<div class="acca-road-line"></div>'+
      '<div class="acca-road-node acca-road-highlight">Strategic Professional</div>'+
      '<div class="acca-road-fork">'+
        '<div class="acca-road-branch"><div class="acca-road-node">SBL + SBR<br><small>Compulsory</small></div></div>'+
        '<div class="acca-road-branch"><div class="acca-road-node">Choose 2 Options<br><small>AFM / APM / ATX / AAA</small></div></div>'+
      '</div>'+
      '<div class="acca-road-line"></div>'+
      '<div class="acca-road-node">36 Months PER<br><small>Practical Experience Requirement</small></div>'+
      '<div class="acca-road-line"></div>'+
      '<div class="acca-road-node acca-road-final">🏅 ACCA Member</div>'+
    '</div>';
  }

  var LEVELS = {
    fia: {
      name:'Foundations in Accountancy', short:'FIA', icon:'🎓',
      desc:'The entry route for students who don\u2019t yet meet ACCA\u2019s minimum academic requirements (typically under 2 A-Levels/equivalent, or without a qualifying degree).',
      levelMeta:{ duration:'2 hours', format:'CBE \u2014 Objective Test (MCQ, drag-and-drop, number entry)', passMark:'50%', dates:'On-demand \u2014 book and sit anytime once ready' },
      papers:[
        { code:'FA1', name:'Recording Financial Transactions', topics:['Double-entry bookkeeping','Ledger accounts & trial balance','Basic control accounts','Correcting errors & journals','Books of prime entry'] },
        { code:'MA1', name:'Management Information', topics:['Cost classification','Materials, labour & overhead costs','Basic budgeting concepts','Spreadsheet use in accounting','Cost coding & recording'] },
        { code:'FA2', name:'Maintaining Financial Records', topics:['Accounting principles & concepts','Non-current assets & depreciation','Accruals & prepayments','Receivables & payables','Preparing simple financial statements'] },
        { code:'MA2', name:'Managing Costs and Finances', topics:['Costing methods (absorption, marginal, process)','Standard costing & variance analysis','Working capital management basics','Short-term decision-making','Capital investment appraisal basics'] }
      ]
    },
    ak: {
      name:'Applied Knowledge', short:'AK', icon:'📘',
      desc:'The first level of the main ACCA Qualification \u2014 builds core accounting, business and technology fundamentals. Equivalent to the first year of a related degree.',
      levelMeta:{ duration:'2 hours', format:'CBE \u2014 Objective Test Questions (MCQ, drag-and-drop, number entry)', passMark:'50%', dates:'On-demand \u2014 book and sit anytime, instant provisional results' },
      papers:[
        { code:'BT', name:'Business and Technology', topics:['Business organisation structure & governance','Business ethics & professional values','Leadership, management & teams','IT & digital systems in business','Personal effectiveness & communication'] },
        { code:'MA', name:'Management Accounting', topics:['Cost classification & behaviour','Absorption & marginal costing','Budgeting & budgetary control','Standard costing & variance analysis','Performance measurement basics'] },
        { code:'FA', name:'Financial Accounting', topics:['Double-entry bookkeeping & the accounting cycle','Preparing IFRS-based financial statements','Basic consolidated accounts','Regulatory & conceptual framework','Interpretation of accounts (ratios)'] }
      ]
    },
    as_: {
      name:'Applied Skills', short:'AS', icon:'📗',
      desc:'The second level \u2014 applies technical knowledge to real business situations. Broadly equivalent to the final year of a related degree; this is where CA/CMA/B.Com exemptions concentrate most heavily.',
      levelMeta:{ duration:'3 hours', format:'CBE \u2014 Objective Test + Multi-task Questions + Constructed Response (essay/calculation)', passMark:'50%', dates:'Quarterly sessions (March, June, September, December) \u2014 except LW, which is on-demand' },
      papers:[
        { code:'LW', name:'Corporate and Business Law', topics:['Legal system & sources of law','Contract law','Company law \u2014 formation, shares, directors','Employment law basics','Corporate governance & insolvency basics'] },
        { code:'PM', name:'Performance Management', topics:['Advanced costing techniques (ABC, target costing)','Budgeting & variance analysis','Performance measurement systems','Decision-making (CVP, relevant costing)','Risk & uncertainty in decisions'] },
        { code:'TX', name:'Taxation', topics:['Income tax computation','Corporate tax computation','Capital gains tax','VAT/indirect tax (or GST in the India variant)','Tax administration & compliance'] },
        { code:'FR', name:'Financial Reporting', topics:['Preparing IFRS-based financial statements','Consolidated financial statements','Financial instruments','Interpretation of financial statements','Reporting for specialised entities'] },
        { code:'AA', name:'Audit and Assurance', topics:['Audit framework & regulation','Planning & risk assessment','Internal control evaluation','Audit evidence & sampling','Review, reporting & completion'] },
        { code:'FM', name:'Financial Management', topics:['Working capital management','Investment appraisal techniques','Business valuations','Cost of capital','Risk management (forex, interest rate)'] }
      ]
    },
    sp: {
      name:'Strategic Professional', short:'SP', icon:'🏆',
      desc:'The final level \u2014 tests strategic thinking, professional judgement and the ability to advise senior management. SBL and SBR are compulsory; choose any 2 of the remaining 4 options. No exemptions are ever granted at this level, regardless of prior qualification.',
      levelMeta:{ duration:'3 hours (SBL/SBR include reading & planning time)', format:'CBE \u2014 Case studies, strategic analysis, constructed response', passMark:'50%', dates:'Quarterly sessions (March, June, September, December)' },
      papers:[
        { code:'SBL', name:'Strategic Business Leader', essential:true, topics:['Governance & stakeholder management','Strategic position & strategic choices','Risk management','Professional skills (integrated case study)','Ethics & professional judgement'] },
        { code:'SBR', name:'Strategic Business Reporting', essential:true, topics:['Advanced IFRS application','Group accounts (complex structures)','Reporting for specialised entities','Ethical & professional judgement in reporting','Current issues in corporate reporting'] },
        { code:'AFM', name:'Advanced Financial Management', topics:['Advanced investment appraisal','Acquisitions & mergers','Corporate reorganisation & reconstruction','Treasury & advanced risk management','Economic environment for multinationals'] },
        { code:'APM', name:'Advanced Performance Management', topics:['Strategic performance measurement systems','Environmental, social & ethical performance','Current developments (data analytics, not-for-profit)','Performance evaluation & benchmarking','Strategic HR & performance'] },
        { code:'ATX', name:'Advanced Taxation', topics:['Advanced personal & corporate tax planning','Taxation of owner-managed businesses','Impact of taxes on business/personal decisions','Ethics in tax practice','Cross-border tax issues'] },
        { code:'AAA', name:'Advanced Audit and Assurance', topics:['Regulatory & professional environment','Professional & ethical considerations','Quality management in audit firms','Group audits','Audit-related & assurance services, reporting'] }
      ]
    }
  };

  var EXEMPTION_TABLE = [
    ['CA Final (ICAI) / CMA 5+ yrs exp. (ICMAI)','9 exemptions \u2014 all of Applied Knowledge + Applied Skills. Sit only the 4 Strategic Professional papers.'],
    ['CA Intermediate / IPCC','6 exemptions \u2014 BT, MA, FA, LW, TX, AA. Sit PM, FR, FM + all 4 Strategic Professional papers (7 total).'],
    ['ICMAI CMA (qualified, <5 yrs exp.)','7 exemptions. Sit PM and AA + all 4 Strategic Professional papers.'],
    ['B.Com graduate','Typically 4\u20136 exemptions \u2014 BT, MA, FA and TX (now exempt for B.Com); LW and FR possible depending on university syllabus.'],
    ['MBA (Finance)','Up to 9 exemptions possible, depending on subjects covered in the programme.'],
    ['US CMA','Typically 3 exemptions.']
  ];

  function overview(){
    var levelKeys = ['fia','ak','as_','sp'];
    var cards = levelKeys.map(function(k){
      var l = LEVELS[k];
      return '<button type="button" class="ca-level-card" data-acca-open="'+k+'">'+
        '<span class="ca-level-icon">'+l.icon+'</span>'+
        '<b>'+l.name+'</b>'+
        '<span>'+l.papers.length+' paper'+(l.papers.length>1?'s':'')+'</span>'+
        '<em>Explore →</em>'+
      '</button>';
    }).join('');
    return `
      <section class="upsc-section" style="margin-top:28px;">
        <div class="cid-kicker">ACCA INTELLIGENCE</div>
        <h1 style="margin:8px 0 8px;">ACCA \u2014 Association of Chartered Certified Accountants</h1>
        <p class="sub">A globally recognised accountancy qualification (UK-based) \u2014 13 papers across 3 levels, plus an alternate foundation entry route.</p>
        ${roadmapHTML()}
        <div class="acca-level-note">The roadmap above shows the full journey. Tap a level below to see its individual papers.</div>
        <div class="ca-level-grid" style="margin-top:18px;">${cards}</div>
      </section>`;
  }

  function levelPapers(key){
    var l = LEVELS[key];
    if(!l) return overview();
    var cards = l.papers.map(function(p){
      return '<button type="button" class="exam-icon-card" data-acca-paper="'+key+':'+p.code+'">'+
        '<span class="exam-icon">'+(p.essential ? '⭐' : l.icon)+'</span>'+
        '<b>'+p.code+'</b>'+
        '<span>'+p.name+'</span>'+
        '<em>Explore →</em>'+
      '</button>';
    }).join('');
    var essentialNote = key === 'sp' ? '<div class="acca-level-note">⭐ SBL and SBR are compulsory for everyone. Choose any 2 of AFM, APM, ATX, AAA based on career direction.</div>' : '';
    return back('ACCA Overview', 'overview') + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">ACCA \u2014 ${l.short}</div>
        <h2>${l.icon} ${l.name}</h2>
        <p class="sub">${l.desc}</p>
        <div class="exam-icon-grid" style="margin-top:22px;">${cards}</div>
        ${essentialNote}
      </section>`;
  }

  function chipList(items){
    return '<div class="ca-topic-chips">' + items.map(function(t){ return '<span class="ca-topic-chip">'+t+'</span>'; }).join('') + '</div>';
  }

  function exemptionNoteForPaper(levelKey, code){
    if(levelKey === 'sp') return 'No exemptions are ever granted for Strategic Professional papers, regardless of qualification \u2014 SBL, SBR and both chosen options must always be attempted.';
    if(levelKey === 'fia') return 'FIA papers are themselves an alternate entry route for those without other qualifying credentials \u2014 exemption logic applies to the main 13-paper track (Applied Knowledge/Applied Skills), not to FIA.';
    return 'Eligible for exemption based on prior qualification (see the Exemption table below) \u2014 always confirm the exact result via ACCA\u2019s official exemption calculator, since it depends on your specific university/course syllabus, not just the degree title.';
  }

  function careerForPaper(levelKey, code){
    var map = {
      BT:'Foundational \u2014 relevant to every accounting/finance career; builds business-context awareness employers expect from day one.',
      MA:'Cost & management accounting roles, budgeting and internal reporting functions.',
      FA:'Financial accounting, bookkeeping and general ledger roles \u2014 the technical base for every later paper.',
      LW:'Company secretarial functions, compliance roles, and any role needing corporate/contract law literacy.',
      PM:'Management accounting, FP&A (financial planning & analysis), and business partnering roles.',
      TX:'Tax advisory and tax consulting careers \u2014 a strong differentiator for Big 4 tax practices.',
      FR:'Financial reporting, technical accounting and IFRS-conversion roles at MNCs.',
      AA:'External/internal audit roles \u2014 a near-mandatory paper for Big 4 audit entry.',
      FM:'Corporate finance, treasury and financial planning roles.',
      SBL:'Tests leadership and strategic advisory capability \u2014 relevant to every senior finance role, not one specific track.',
      SBR:'Group financial reporting and technical accounting leadership roles at MNCs.',
      AFM:'Investment banking, treasury, corporate finance and M&A advisory careers.',
      APM:'Management consulting, strategy and performance-management leadership roles.',
      ATX:'Specialised tax advisory careers \u2014 pairs well with a tax-focused career path from TX.',
      AAA:'Senior audit roles \u2014 essential for Big 4/mid-tier audit partners track.'
    };
    return map[code] || 'Builds toward the broader ACCA-qualified finance/accounting career path.';
  }

  function paperDetail(levelKey, code){
    var l = LEVELS[levelKey];
    if(!l) return overview();
    var p = l.papers.filter(function(x){ return x.code === code; })[0];
    if(!p) return levelPapers(levelKey);
    var m = l.levelMeta;

    var examCard =
      '<div class="exam-fact-row">'+
        '<div class="exam-fact"><span class="exam-fact-label">Duration</span><span class="exam-fact-value">'+m.duration+'</span></div>'+
        '<div class="exam-fact"><span class="exam-fact-label">Marks / Pass Mark</span><span class="exam-fact-value">'+m.passMark+'</span></div>'+
        '<div class="exam-fact"><span class="exam-fact-label">Exam Dates</span><span class="exam-fact-value">'+m.dates+(levelKey==='as_' && code==='LW' ? ' (on-demand for LW specifically)' : '')+'</span></div>'+
      '</div>'+
      '<div class="exam-block-label">Exam Pattern & Format</div>'+
      '<div class="ca-step-card">'+m.format+' No negative marking at any ACCA level \u2014 always attempt every question.</div>';

    var syllabusCard =
      '<div class="exam-block-label">Important Topics</div>'+
      chipList(p.topics)+
      '<div class="ca-step-note" style="margin-top:10px;">The syllabus is reviewed annually by ACCA (IFRS updates, sustainability & digital-skills integration in recent years) \u2014 always confirm against the current Study Guide on the official ACCA site.</div>';

    var eligibilityCard =
      '<div class="exam-block-label">Eligibility for This Paper</div>'+
      '<div class="ca-step-card">Open to any registered ACCA student who has met the qualification\u2019s general entry requirement (min. 2 A-Levels/equivalent + 3 GCSEs including Maths & English, or the FIA route, or a relevant degree/professional qualification for direct entry). There is no separate paper-wise entry bar beyond being registered for the ACCA Qualification.</div>'+
      '<div class="exam-block-label">Exemptions</div>'+
      '<div class="ca-step-card">'+exemptionNoteForPaper(levelKey, code)+'</div>';

    var careerCard =
      '<div class="exam-block-label">Career Relevance</div>'+
      '<div class="ca-step-card">'+careerForPaper(levelKey, code)+'</div>'+
      '<div class="exam-block-label">Preparation Strategy</div>'+
      '<div class="ca-step-card">Work through the ACCA-approved study text chapter-by-chapter, then shift to question practice using the ACCA Practice Platform (mirrors the real CBE interface). Attempt past/specimen exams under timed conditions in the final 3\u20134 weeks \u2014 examiner reports (published after each session) are the single most underused resource for spotting common mistakes.</div>'+
      '<div class="exam-block-label">Study Resources & Previous Exams</div>'+
      '<div class="ca-step-card">ACCA\u2019s own Practice Platform and Study Hub (free with registration) carry specimen exams and past session questions with mark schemes. Approved Learning Partners (ALPs) also publish revision kits mapped to the current syllabus \u2014 always use the CURRENT syllabus year\u2019s materials, since ACCA revises content annually.</div>';

    return back(l.name, levelKey) + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">ACCA \u2014 ${l.short}${p.essential ? ' \u00b7 COMPULSORY' : ''}</div>
        <h2>${p.code} \u2014 ${p.name}</h2>
        <p class="sub">${l.name}</p>

        <div class="ca-detail-block">${examCard}</div>
        <div class="ca-detail-block">${syllabusCard}</div>
        <div class="ca-detail-block">${eligibilityCard}</div>
        <div class="ca-detail-block">${careerCard}</div>

        ${levelKey !== 'sp' && levelKey !== 'fia' ? exemptionTableHTML() : ''}
      </section>`;
  }

  function exemptionTableHTML(){
    var rows = EXEMPTION_TABLE.map(function(r){
      return '<tr><td><b>'+r[0]+'</b></td><td>'+r[1]+'</td></tr>';
    }).join('');
    return '<div class="ca-detail-block"><div class="exam-block-label">Exemption Reference \u2014 Common Indian Qualifications</div><div class="ca-step-card">'+
      '<div style="overflow:auto;"><table class="mba-cutoff-table"><thead><tr><th>Qualification</th><th>Typical Exemptions</th></tr></thead><tbody>'+rows+'</tbody></table></div>'+
      '<div class="ca-step-note" style="margin-top:10px;">Exemptions are never automatic \u2014 ACCA verifies your actual transcript/syllabus, not just the degree title. Exemption fees apply per paper skipped (roughly the same as that paper\u2019s own exam fee). Always confirm via ACCA\u2019s official exemption calculator.</div>'+
    '</div></div>';
  }

  function bind(){
    var r = root();
    if(!r) return;
    r.querySelectorAll('[data-acca-open]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-acca-open')); };
    });
    r.querySelectorAll('[data-acca-paper]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-acca-paper')); };
    });
    r.querySelectorAll('[data-acca-back]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-acca-back')); };
    });
  }

  function render(view){
    var r = root();
    if(!r) return;
    r.style.display = 'block';
    if(view && view.indexOf(':') > -1){
      var parts = view.split(':');
      r.innerHTML = paperDetail(parts[0], parts[1]);
    } else if(view && LEVELS[view]){
      r.innerHTML = levelPapers(view);
    } else {
      r.innerHTML = overview();
    }
    bind();
  }

  var previousOpenCategory = window.cidOpenCategory;
  window.cidOpenCategory = function(name){
    if(name === 'ACCA'){
      document.body.classList.remove('cid-home-mode');
      document.body.classList.add('cid-category-mode');
      if(typeof window.cidRenderCategorySidebar === 'function'){
        window.cidRenderCategorySidebar('ACCA', 'Global Accountancy', [
          {key:'overview', label:'ACCA Overview'},
          {key:'fia', label:'Foundations in Accountancy'},
          {key:'ak', label:'Applied Knowledge'},
          {key:'as_', label:'Applied Skills'},
          {key:'sp', label:'Strategic Professional'}
        ], 'overview', function(key){
          for(var i=0;i<2;i++){
            var backBtn = document.querySelector('[data-acca-back]');
            if(backBtn) backBtn.click();
          }
          if(key !== 'overview'){
            var openBtn = document.querySelector('[data-acca-open="'+key+'"]');
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
        if(label) label.textContent = 'ACCA';
      }
      render('overview');
      return;
    }
    if(typeof previousOpenCategory === 'function') return previousOpenCategory(name);
  };
})();
