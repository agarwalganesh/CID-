// Category module extracted from index.html.

(function(){
  function root(){ return document.getElementById('pageRoot'); }
  function back(){ return '<button class="cid-back" type="button" data-ca-back style="margin-top:22px;">← Back to CA Overview</button>'; }

  var CA_LEVELS = {
    foundation: {
      name: 'CA Foundation',
      icon: '🧮',
      tagline: 'Entry point into the CA course \u2014 registration allowed after Class 10, exam attempted after Class 12.',
      level: 'Entry level of the CA course. Students can register after Class 10, but can only sit the exam after appearing for Class 12. No minimum marks are required to register.',
      papers: { count: 4, marks: 400, note: 'All 4 papers are attempted together in the same session \u2014 there are no groups at this level.' },
      subjects: [
        { group: null, items: [
          { no: 1, name: 'Accounting', type: 'Subjective',
            topics: ['Accounting Process & Journal Entries', 'Bank Reconciliation', 'Inventories', 'Depreciation', 'Bills of Exchange', 'Final Accounts of Sole Proprietors', 'Partnership Accounts', 'Company Accounts (Share Capital basics)'],
            questions: 'Descriptive paper with internal choice \u2014 ICAI does not fix an exact question count; answers are structured, multi-part problems (not discrete MCQs).' },
          { no: 2, name: 'Business Laws', type: 'Subjective',
            topics: ['Indian Contract Act, 1872', 'Sale of Goods Act, 1930', 'Indian Partnership Act & LLP Act', 'The Companies Act, 2013 (basics)', 'Negotiable Instruments Act, 1881'],
            questions: 'Descriptive paper with internal choice \u2014 no fixed question count published by ICAI; typically a mix of short problems and theory questions.' },
          { no: 3, name: 'Quantitative Aptitude (Business Maths, Logical Reasoning, Statistics)', type: 'Objective (MCQ)',
            topics: ['Ratio, Proportion, Indices, Logarithms', 'Equations & Linear Inequalities', 'Time Value of Money (Interest, Annuities, CAGR)', 'Permutations & Combinations', 'Sequences & Series', 'Number Series, Coding-Decoding, Direction Sense', 'Measures of Central Tendency & Dispersion', 'Probability, Correlation & Regression'],
            questions: '100 MCQs, 1 mark each \u2014 Business Mathematics (40 marks), Logical Reasoning (20 marks), Statistics (40 marks). 2 hours, 0.25 negative marking per wrong answer.' },
          { no: 4, name: 'Business Economics', type: 'Objective (MCQ)',
            topics: ['Nature & Scope of Business Economics', 'Theory of Demand & Supply', 'Price Elasticity', 'Theory of Production & Cost', 'Price Determination in Different Markets', 'National Income & Business Cycles', 'Public Finance basics', 'Money Market & Indian Economy'],
            questions: '100 MCQs, 1 mark each. 2 hours, 0.25 negative marking per wrong answer.' }
        ]}
      ],
      groupStructure: 'No groups \u2014 CA Foundation is a single level. All 4 papers must be cleared together.',
      examPattern: 'Papers 1 &amp; 2 are fully descriptive (3 hours each). Papers 3 &amp; 4 are 100% MCQ-based (2 hours each) with negative marking of 0.25 marks for every wrong answer. Offline, pen-and-paper mode; English or Hindi (except one section of Paper 2).',
      passingCriteria: 'Minimum 40% in each of the 4 papers <b>and</b> an overall aggregate of 50% across all 4 papers combined. <b>Same rule every attempt</b> \u2014 CA Foundation has <b>no exemption or carry-forward scheme</b> (that only applies to Intermediate and Final), so all 4 papers must independently clear this bar each time.',
      attemptCycle: 'Held 3 times a year \u2014 January, May/June and September.'
    },
    intermediate: {
      name: 'CA Intermediate',
      icon: '📘',
      tagline: 'After clearing Foundation, or via Direct Entry for graduates/postgraduates who meet the eligibility percentage.',
      level: 'Second stage of the CA course. Entry via (a) clearing CA Foundation, or (b) the Direct Entry route \u2014 commerce graduates with 55%+ marks, or other graduates/postgraduates with 60%+, can register directly (with an 8-month study period before appearing).',
      papers: { count: 6, marks: 600, note: '6 papers split into 2 groups of 3 papers each.' },
      subjects: [
        { group: 'Group I', items: [
          { no: 1, name: 'Advanced Accounting', type: '70% Descriptive + 30% MCQ',
            topics: ['Accounting Standards (AS)', 'Amalgamation & Reconstruction', 'Consolidated Financial Statements', 'Buyback & Redemption of Securities', 'Partnership: Admission/Retirement/Dissolution', 'Banking & Insurance Company Accounts'],
            questions: '70 marks descriptive (structured problems, internal choice) + 30 marks case-study-based MCQs \u2014 typically 12\u201315 objective questions across 2\u20133 case-lets. No negative marking.' },
          { no: 2, name: 'Corporate & Other Laws', type: '70% Descriptive + 30% MCQ',
            topics: ['Companies Act, 2013 (Incorporation, Share Capital, Charges)', 'Meetings & Resolutions', 'Dividends, Accounts & Audit provisions', 'General Clauses Act, 1897', 'Interpretation of Statutes', 'FEMA basics'],
            questions: '70 marks descriptive + 30 marks case-study MCQs (approx. 12\u201315 questions). No negative marking.' },
          { no: 3, name: 'Taxation (Direct Tax + GST)', type: '70% Descriptive + 30% MCQ',
            topics: ['Residential Status & Scope of Income', 'Heads of Income & Computation', 'Deductions under Chapter VI-A', 'GST: Levy, Registration & Input Tax Credit', 'GST Returns & Payment of Tax'],
            questions: '70 marks descriptive (computation-heavy, internal choice) + 30 marks MCQs (approx. 12\u201315 questions split across Income Tax and GST). No negative marking.' }
        ]},
        { group: 'Group II', items: [
          { no: 4, name: 'Cost & Management Accounting', type: '70% Descriptive + 30% MCQ',
            topics: ['Cost Sheet & Cost Concepts', 'Material, Labour & Overhead Costing', 'Activity Based Costing', 'Standard Costing & Variance Analysis', 'Marginal Costing', 'Budgetary Control'],
            questions: '70 marks descriptive numerical problems (internal choice) + 30 marks MCQs (approx. 12\u201315 questions). No negative marking.' },
          { no: 5, name: 'Auditing & Ethics', type: '70% Descriptive + 30% MCQ',
            topics: ['Nature, Objective & Scope of Audit', 'Audit Planning, Risk Assessment & Documentation', 'Audit Sampling & Internal Control', 'Company Audit basics', 'Professional Ethics & Code of Conduct'],
            questions: '70 marks descriptive + 30 marks case-study MCQs (approx. 12\u201315 questions). No negative marking.' },
          { no: 6, name: 'Financial Management & Strategic Management', type: '70% Descriptive + 30% MCQ',
            topics: ['Ratio Analysis & Cost of Capital', 'Capital Budgeting', 'Working Capital Management', 'Leverage Analysis', 'Strategic Management Process & SWOT', 'Corporate/Business/Functional Level Strategy'],
            questions: '70 marks descriptive (FM numericals + SM theory) + 30 marks MCQs (approx. 12\u201315 questions). No negative marking.' }
        ]}
      ],
      groupStructure: 'Two groups of 3 papers each. A student may attempt one group at a time or both groups together in the same session \u2014 both groups must eventually be cleared to complete Intermediate.',
      examPattern: 'Each paper is 100 marks with a 70% descriptive + 30% objective (MCQ) split. There is no negative marking at this level.',
      passingCriteria: 'Minimum 40% in each paper <b>and</b> 50% aggregate within that group. Clear both groups (can be in separate attempts) to complete Intermediate.',
      attemptCycle: 'Held 3 times a year \u2014 January, May and September.'
    },
    final: {
      name: 'CA Final',
      icon: '🏆',
      tagline: 'The last stage before qualifying as a Chartered Accountant \u2014 after both Intermediate groups, articleship and self-paced modules.',
      level: 'Final stage of the CA course. Eligible after clearing both CA Intermediate groups, completing ICITSS training, and while undergoing or after the required period of articleship (practical training).',
      papers: { count: 6, marks: 600, note: '6 papers in 2 groups of 3, plus 4 mandatory Self-Paced Online Modules (Set A\u2013D) that must be separately cleared before appearing.' },
      subjects: [
        { group: 'Group I', items: [
          { no: 1, name: 'Financial Reporting', type: '70% Descriptive + 30% MCQ',
            topics: ['Ind AS Framework', 'Consolidated Financial Statements (Ind AS)', 'Business Combinations & Corporate Restructuring', 'Ind AS on Financial Instruments', 'EPS & Analysis of Financial Statements'],
            questions: '70 marks descriptive (internal choice) + 30 marks case-study MCQs (approx. 12\u201315 questions). Negative marking of 0.25 applies to the MCQ portion.' },
          { no: 2, name: 'Advanced Financial Management', type: '70% Descriptive + 30% MCQ',
            topics: ['Security Analysis & Portfolio Management', 'Derivatives: Forwards, Futures, Options, Swaps', 'International Financial Management & Forex', 'Business Valuation', 'Mergers & Acquisitions', 'Mutual Funds'],
            questions: '70 marks descriptive numericals + 30 marks MCQs (approx. 12\u201315 questions). 0.25 negative marking on the MCQ portion.' },
          { no: 3, name: 'Advanced Auditing, Assurance & Professional Ethics', type: '70% Descriptive + 30% MCQ',
            topics: ['Quality Control (SQC/SA 220)', 'Audit of Consolidated Financial Statements', 'Audit Committee & Corporate Governance', 'Bank, NBFC & Insurance Audit', 'Advanced Professional Ethics', 'Peer Review & Quality Review'],
            questions: '70 marks descriptive + 30 marks case-study MCQs (approx. 12\u201315 questions). 0.25 negative marking on MCQs.' }
        ]},
        { group: 'Group II', items: [
          { no: 4, name: 'Direct Tax Laws & International Taxation', type: '70% Descriptive + 30% MCQ',
            topics: ['Corporate Tax Computation', 'Assessment of Various Entities', 'Transfer Pricing', 'Double Taxation Avoidance Agreements (DTAA)', 'GAAR', 'Tax Planning vs. Avoidance vs. Evasion'],
            questions: '70 marks descriptive (computation-heavy) + 30 marks MCQs (approx. 12\u201315 questions). 0.25 negative marking on MCQs.' },
          { no: 5, name: 'Indirect Tax Laws', type: '70% Descriptive + 30% MCQ',
            topics: ['GST: Advanced Input Tax Credit', 'GST Refunds', 'Assessment, Audit, Demand & Recovery under GST', 'GST Appeals', 'Customs Valuation & Duty Types', 'Foreign Trade Policy basics'],
            questions: '70 marks descriptive + 30 marks MCQs (approx. 12\u201315 questions, split GST/Customs). 0.25 negative marking on MCQs.' },
          { no: 6, name: 'Integrated Business Solutions (multidisciplinary case study incl. Strategic Management)', type: 'Case-study based',
            topics: ['Multidisciplinary case integrating Financial Reporting, Audit, Tax & Costing', 'Financial Management application', 'Corporate & Economic Laws application', 'Strategic Management \u2014 case-based decision making'],
            questions: 'Entirely case-study based \u2014 a small number of large, integrated cases (not standalone MCQs or short questions), each drawing on multiple subjects at once.' }
        ]}
      ],
      groupStructure: 'Two groups of 3 papers each, the same shape as Intermediate. Both groups must be cleared to qualify as a Chartered Accountant.',
      examPattern: '70% descriptive + 30% objective (MCQ), with negative marking of 0.25 marks for each wrong MCQ answer (unlike Intermediate, which has no negative marking).',
      passingCriteria: 'Minimum 40% in each paper <b>and</b> 50% aggregate within that group.',
      attemptCycle: 'Held twice a year \u2014 May &amp; November. (ICAI briefly moved CA Final to 3 attempts/year \u2014 Jan/May/Sept \u2014 from March 2025, then reverted it to 2 sessions a year starting the May 2026 exam. Foundation and Intermediate remain 3x/year.)'
    }
  };

  function overview(){
    var order = [
      { key: 'foundation', sub: 'Entry level \u2014 4 papers' },
      { key: 'intermediate', sub: '2 groups \u2014 6 papers' },
      { key: 'final', sub: '2 groups \u2014 6 papers + modules' }
    ];
    var cards = order.map(function(o){
      var d = CA_LEVELS[o.key];
      return '<button type="button" class="ca-level-card" data-ca-open="'+o.key+'">'+
        '<span class="ca-level-icon">'+d.icon+'</span>'+
        '<b>'+d.name.replace('CA ', '')+'</b>'+
        '<span>'+o.sub+'</span>'+
        '<em>Explore →</em>'+
      '</button>';
    }).join('');
    return `
      <section class="upsc-section" style="margin-top:28px;">
        <div class="cid-kicker">CA INTELLIGENCE</div>
        <h1 style="margin:8px 0 8px;">Chartered Accountancy (CA)</h1>
        <p class="sub">ICAI's three-stage path to becoming a Chartered Accountant \u2014 Foundation, Intermediate and Final.</p>
        <div class="ca-level-grid" style="margin-top:22px;">${cards}</div>
      </section>`;
  }

  var CA_EXEMPTION_HTML =
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:2px;">' +
      '<div style="background:#f6f8fc;border:1px solid #e3e8ef;border-radius:10px;padding:10px 12px;">' +
        '<span style="display:block;font-size:10px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#7a8797;margin-bottom:4px;">First Attempt</span>' +
        '<span style="font-size:12.5px;font-weight:600;color:#24354c;">40% in each paper of the group + 50% group aggregate.</span>' +
      '</div>' +
      '<div style="background:#f6f8fc;border:1px solid #e3e8ef;border-radius:10px;padding:10px 12px;">' +
        '<span style="display:block;font-size:10px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#7a8797;margin-bottom:4px;">If Not Cleared, but Scored 60%+ in a Paper</span>' +
        '<span style="font-size:12.5px;font-weight:600;color:#24354c;">That paper is <b>exempted for the next 3 attempts</b> \u2014 only the remaining papers need reattempting; the 60%+ marks carry into the aggregate each time.</span>' +
      '</div>' +
    '</div>' +
    '<div class="ca-step-note" style="margin-top:10px;">If the group still isn\u2019t cleared within those 3 attempts, the exemption lapses and that paper must be reattempted fresh. Confirm current exemption validity against the live ICAI notification, as this has been revised under the New Scheme.</div>';

  // Official ICAI pass-percentage data, last 3 years, attempt-wise.
  // Foundation/Intermediate: overall (Foundation) / Both-Groups (Intermediate) %, by Year x session.
  // '\u2014' = no session held that slot (3x/year cycle only began Jan 2025); 'TBD' = session held, result not yet declared.
  var CA_PASS_RATE_GRID = {
    foundation: {
      title: 'CA Foundation \u2014 Overall Pass %',
      rows: [
        ['2024', '\u2014', '\u2014', '19.67%'],
        ['2025', '21.52%', '15.09%', '14.78%'],
        ['2026', '19.23%', '20.09%', 'TBD (exam underway)']
      ]
    },
    intermediate: {
      title: 'CA Intermediate \u2014 Both Groups Pass %',
      rows: [
        ['2024', '\u2014', '\u2014', '5.66%'],
        ['2025', '14.05%', '13.22%', '10.06%'],
        ['2026', '9.39%', '8.47%', 'TBD (exam underway)']
      ]
    }
  };

  function passRateGridHTML(key){
    var g = CA_PASS_RATE_GRID[key];
    if(!g) return '';
    var rowsHTML = g.rows.map(function(r){
      return '<tr><td>'+r[0]+'</td><td><span class="mba-cutoff-badge">'+r[1]+'</span></td><td><span class="mba-cutoff-badge">'+r[2]+'</span></td><td><span class="mba-cutoff-badge">'+r[3]+'</span></td></tr>';
    }).join('');
    return '<div style="margin-top:14px;">'+
      '<div style="font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#7a8797;margin-bottom:8px;">'+g.title+' (Last 3 Years, Attempt-wise)</div>'+
      '<div style="overflow:auto;"><table class="mba-cutoff-table"><thead><tr><th>Year</th><th>January</th><th>May</th><th>September</th></tr></thead><tbody>'+rowsHTML+'</tbody></table></div>'+
      '<div class="ca-step-note" style="margin-top:8px;">3 sessions/year (Jan, May, Sep) began only from 2025 \u2014 2024 had 2 transitional sessions. Figures are official ICAI \u201cboth groups together\u201d / overall pass percentages; group-wise rates run higher. Always confirm against the latest ICAI result release.</div>'+
    '</div>';
  }

  var CA_FINAL_PASS_RATE_HTML = (function(){
    var rows = [
      ['May 2024', '19.88%'],
      ['Nov 2024', '13.44%'],
      ['May 2025', '18.75%'],
      ['Sep 2025', '16.23%'],
      ['Jan 2026', '10.97%'],
      ['May 2026', '14.07%']
    ];
    var rowsHTML = rows.map(function(r){
      return '<tr><td>'+r[0]+'</td><td><span class="mba-cutoff-badge">'+r[1]+'</span></td></tr>';
    }).join('');
    return '<div style="margin-top:14px;">'+
      '<div style="font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#7a8797;margin-bottom:8px;">CA Final \u2014 Both Groups Pass % (Last 3 Years, Session-wise)</div>'+
      '<div style="overflow:auto;"><table class="mba-cutoff-table"><thead><tr><th>Session</th><th>Both Groups Pass %</th></tr></thead><tbody>'+rowsHTML+'</tbody></table></div>'+
      '<div class="ca-step-note" style="margin-top:8px;">Final\u2019s session calendar itself changed twice in this window (2x/year \u2192 briefly 3x/year from Jan 2025 \u2192 back to 2x/year from May 2026) \u2014 see Attempt Cycle above. Group-wise pass rates run higher than the \u201cboth groups\u201d figures shown here. Always confirm against the latest ICAI result release.</div>'+
    '</div>';
  })();

  function subjectsHTML(d, levelKey){
    return d.subjects.map(function(g, gi){
      var groupHeader = g.group ? '<div class="ca-subject-group-title">'+g.group+'</div>' : '';
      var items = g.items.map(function(s, si){
        var id = levelKey+'-'+gi+'-'+si;
        var topicsHTML = s.topics.map(function(t){ return '<span class="ca-topic-chip">'+t+'</span>'; }).join('');
        return '<div class="ca-paper-item" data-ca-paper-id="'+id+'">'+
          '<div class="ca-paper-head" data-ca-paper-toggle="'+id+'">'+
            '<span class="ca-paper-head-left"><b>Paper '+s.no+'.</b> '+s.name+'</span>'+
            '<span class="ca-paper-head-right"><span class="ca-subject-type">'+s.type+'</span><span class="ca-paper-chevron">▶</span></span>'+
          '</div>'+
          '<div class="ca-paper-body">'+
            '<div class="ca-paper-body-inner">'+
              '<div class="ca-paper-subhead">Important Topics</div>'+
              '<div class="ca-topic-chips">'+topicsHTML+'</div>'+
              '<div class="ca-paper-subhead">Number of Questions</div>'+
              '<div class="ca-qcount-box">'+s.questions+'</div>'+
            '</div>'+
          '</div>'+
        '</div>';
      }).join('');
      return '<div class="ca-subject-group">'+groupHeader+items+'</div>';
    }).join('');
  }

  function levelDetail(key){
    var d = CA_LEVELS[key];
    if(!d) return overview();

    var sections = [
      { key:'exam', icon:'📋', title:'Exam Details', desc:'Level, number of papers, group structure, exam pattern and attempt cycle.' },
      { key:'subjects', icon:'📚', title:'Subjects', desc:'Paper-wise topics and number of questions \u2014 tap any paper to expand.' },
      { key:'passing', icon:'🎯', title:'Passing Criteria & Pass %', desc:'Passing rule, exemption carry-forward, and last 3 years\u2019 pass percentage.' }
    ];
    var cardsHTML = sections.map(function(s){
      return '<button class="upsc-module" type="button" data-ca-section="'+key+':'+s.key+'"><div class="i">'+s.icon+'</div><h3>'+s.title+'</h3><p>'+s.desc+'</p></button>';
    }).join('');

    return back() + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">${d.name.toUpperCase()}</div>
        <h2>${d.icon} ${d.name}</h2>
        <p class="sub">${d.tagline}</p>
        <div class="upsc-grid" style="margin-top:22px;">${cardsHTML}</div>
      </section>`;
  }

  function levelSectionDetail(key, section){
    var d = CA_LEVELS[key];
    if(!d) return overview();
    var backBtn = '<button class="cid-back" type="button" data-ca-section-back="'+key+'" style="margin-top:22px;">← Back to '+d.name+'</button>';
    var body = '';
    var title = '';

    if(section === 'exam'){
      title = 'Exam Details';
      body =
        '<div class="ca-detail-block"><div class="ca-step-label">Level</div><div class="ca-step-card">'+d.level+'</div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">Number of Papers</div><div class="ca-step-card"><span class="ca-big-num">'+d.papers.count+'</span> <span class="ca-dim">papers &middot; '+d.papers.marks+' marks total</span><div class="ca-step-note">'+d.papers.note+'</div></div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">Group Structure</div><div class="ca-step-card">'+d.groupStructure+'</div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">Exam Pattern</div><div class="ca-step-card">'+d.examPattern+'</div></div>'+
        '<div class="ca-detail-block"><div class="ca-step-label">Attempt Cycle</div><div class="ca-step-card">'+d.attemptCycle+'</div></div>';
    } else if(section === 'subjects'){
      title = 'Subjects';
      body = '<div class="ca-detail-block"><div class="ca-step-card">'+subjectsHTML(d, key)+'</div></div>';
    } else if(section === 'passing'){
      title = 'Passing Criteria & Pass %';
      body = '<div class="ca-detail-block"><div class="ca-step-label">Passing Criteria</div><div class="ca-step-card">'+d.passingCriteria+(key !== 'foundation' ? CA_EXEMPTION_HTML : '')+(key === 'final' ? CA_FINAL_PASS_RATE_HTML : passRateGridHTML(key))+'</div></div>';
    }

    return backBtn + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">${d.name.toUpperCase()}</div>
        <h2>${title}</h2>
        ${body}
      </section>`;
  }

  function bind(){
    var r = root();
    if(!r) return;
    r.querySelectorAll('[data-ca-open]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-ca-open')); };
    });
    r.querySelectorAll('[data-ca-back]').forEach(function(btn){
      btn.onclick = function(){ render('overview'); };
    });
    r.querySelectorAll('[data-ca-paper-toggle]').forEach(function(head){
      head.onclick = function(){
        var id = this.getAttribute('data-ca-paper-toggle');
        var item = r.querySelector('[data-ca-paper-id="'+id+'"]');
        if(item) item.classList.toggle('open');
      };
    });
    var caTabs = r.querySelectorAll('[data-ca-tab]');
    if(caTabs.length){
      caTabs.forEach(function(btn){
        btn.onclick = function(){
          caTabs.forEach(function(b){ b.classList.remove('active'); });
          this.classList.add('active');
          var target = this.getAttribute('data-ca-tab');
          r.querySelectorAll('[data-ca-panel]').forEach(function(panel){
            panel.classList.toggle('active', panel.getAttribute('data-ca-panel') === target);
          });
        };
      });
    }
    r.querySelectorAll('[data-ca-section]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-ca-section')); };
    });
    r.querySelectorAll('[data-ca-section-back]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-ca-section-back')); };
    });
  }

  function render(view){
    var r = root();
    if(!r) return;
    r.style.display = 'block';
    if(view && view.indexOf(':') > -1){
      var parts = view.split(':');
      r.innerHTML = levelSectionDetail(parts[0], parts[1]);
    } else {
      r.innerHTML = (view && CA_LEVELS[view]) ? levelDetail(view) : overview();
    }
    bind();
  }

  var previousOpenCategory = window.cidOpenCategory;
  window.cidOpenCategory = function(name){
    if(name === 'CA'){
      document.body.classList.remove('cid-home-mode');
      document.body.classList.add('cid-category-mode');
      if(typeof window.cidRenderCategorySidebar === 'function'){
        window.cidRenderCategorySidebar('CA', 'Chartered Accountancy', [
          {key:'overview', label:'CA Overview'},
          {key:'foundation', label:'Foundation'},
          {key:'intermediate', label:'Intermediate'},
          {key:'final', label:'Final'}
        ], 'overview', function(key){
          var backBtn = document.querySelector('[data-ca-back]');
          if(backBtn) backBtn.click();
          if(key !== 'overview'){
            var openBtn = document.querySelector('[data-ca-open="'+key+'"]');
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
        if(label) label.textContent = 'CA';
      }
      render('overview');
      return;
    }
    if(typeof previousOpenCategory === 'function') return previousOpenCategory(name);
  };
})();
