// Category module extracted from index.html.

(function(){
  function root(){ return document.getElementById('pageRoot'); }
  function back(label){ return '<button class="cid-back" type="button" data-pharma-back style="margin-top:22px;">← Back to '+(label||'Pharma')+' Overview</button>'; }

  var PHARMA_TABS = {
    gpat: { icon: '🎓', name: 'GPAT', sub: 'M.Pharm entrance \u2014 500 marks' },
    vacancy: { icon: '🏛️', name: 'Govt Vacancies', sub: 'RRB, ESIC, State PSC & more' },
    semester: { icon: '📚', name: 'Semester', sub: 'B.Pharm \u2014 4 years, 8 semesters' },
    bsc: { icon: '🔬', name: 'B.Sc', sub: 'Physics, Chemistry, Maths, Zoology, Botany \u2014 3 years' }
  };

  var BSC_SUBJECTS = {
    physics:{icon:'⚛️', name:'Physics'},
    chemistry:{icon:'🧪', name:'Chemistry'},
    maths:{icon:'📐', name:'Mathematics'},
    zoology:{icon:'🐾', name:'Zoology'},
    botany:{icon:'🌿', name:'Botany'}
  };

  var BSC_UNITS = {
    physics: {
      '1-1':['Vector Analysis (gradient, divergence, curl, Stokes\u2019/Gauss\u2019 theorems)','Ordinary Differential Equations & basic linear algebra','Newtonian Mechanics \u2014 laws of motion, work-energy theorem, conservation laws','System of particles & rotational dynamics','Central force motion & Kepler\u2019s laws','Special Theory of Relativity (introductory)'],
      '1-2':['Electric fields & Gauss\u2019s law','Electric potential, capacitance & dielectrics','Magnetic fields, electromagnetic induction','Simple harmonic motion; damped & forced oscillations','Wave motion & superposition of waves','Physical optics \u2014 interference, diffraction, polarization'],
      '2-1':['Complex analysis & special functions (Legendre, Bessel)','Fourier series & Fourier transforms','Kinetic theory of gases','Laws of thermodynamics & entropy','Statistical mechanics basics (Maxwell-Boltzmann distribution)','Digital electronics \u2014 logic gates & Boolean algebra'],
      '2-2':['Vector spaces & matrices (eigenvalues/eigenvectors intro)','Partial differential equations','Semiconductor physics & p-n junction diodes','Transistors & amplifier circuits','Operational amplifiers','Basic network analysis'],
      '3-1':['Wave-particle duality & the Schr\u00f6dinger equation','Quantum mechanics of simple systems (particle in a box, harmonic oscillator)','Crystal structure & X-ray diffraction','Band theory of solids','Maxwell\u2019s equations & electromagnetic theory','Electromagnetic wave propagation'],
      '3-2':['Nuclear structure & radioactivity','Nuclear reactions & nuclear models','Elementary particle physics','Communication systems (AM/FM basics)','Microprocessors & advanced digital systems','Astrophysics & astronomy (elective topic)']
    },
    chemistry: {
      '1-1':['Atomic structure \u2014 quantum numbers & electronic configuration','Periodicity of elements','Chemical bonding \u2014 VBT, MOT, hybridisation','Nomenclature & basic concepts of organic chemistry','Stereochemistry \u2014 isomerism & chirality','Aliphatic hydrocarbons'],
      '1-2':['Gaseous state & kinetic theory of gases','Liquid state & solutions','Chemical thermodynamics \u2014 laws, entropy, free energy','s-Block elements','p-Block elements (Groups 13\u201314)','Chemistry of noble gases'],
      '2-1':['Coordination chemistry \u2014 Werner\u2019s theory & nomenclature','d-Block elements (transition metals)','f-Block elements (lanthanides & actinides)','Aromatic hydrocarbons & electrophilic substitution','Alkyl & aryl halides','Reaction mechanisms \u2014 SN1, SN2, E1, E2'],
      '2-2':['Chemical equilibrium','Ionic equilibrium & pH','Electrochemistry \u2014 conductance, cells, EMF','Alcohols, phenols & ethers','Carbonyl compounds (aldehydes & ketones)','Carboxylic acids & derivatives'],
      '3-1':['Quantum chemistry \u2014 Schr\u00f6dinger equation applications','Spectroscopy \u2014 UV-Vis, IR, NMR basics','Photochemistry','Nitrogen-containing compounds \u2014 amines & amides','Chemistry of natural products (carbohydrates, amino acids)','Analytical chemistry \u2014 titrimetric & gravimetric methods'],
      '3-2':['Organometallic chemistry','Bioinorganic chemistry','Polymer chemistry','Instrumental methods of analysis (chromatography, electrochemical)','Green chemistry','Industrial & environmental chemistry']
    },
    maths: {
      '1-1':['Differential calculus \u2014 limits, continuity, differentiability','Successive differentiation & applications','Integral calculus & reduction formulae','Theory of equations','Matrices & determinants','Complex numbers & De Moivre\u2019s theorem'],
      '1-2':['Real number system & sequences','Series & convergence tests','First order differential equations','Linear differential equations with constant coefficients','Coordinate geometry \u2014 conics (2D)','Vector algebra & geometry'],
      '2-1':['Groups, subgroups & cyclic groups','Permutation groups & Lagrange\u2019s theorem','Functions of several variables','Partial derivatives & applications','Multiple integrals','3D coordinate geometry'],
      '2-2':['Rings, subrings & ideals','Vector spaces & linear transformations','Partial differential equations \u2014 formation & Lagrange\u2019s method','Systems of linear ODEs','Numerical methods for solving equations','Laplace transforms'],
      '3-1':['Metric spaces & continuity','Complex functions & analyticity','Complex integration (Cauchy\u2019s theorems)','Linear algebra-II \u2014 eigenvalues & eigenvectors','Inner product spaces','Field theory basics'],
      '3-2':['Numerical solutions of algebraic equations','Numerical integration & differentiation','Probability theory \u2014 axioms & distributions','Random variables & expectation','Statistical methods \u2014 correlation & regression','Mechanics / operations research (elective)']
    },
    zoology: {
      '1-1':['Protozoa & Porifera','Cnidaria & Helminthes','Annelida & Arthropoda','Mollusca & Echinodermata','Carbohydrates, lipids & proteins (biomolecules)','Enzymes & bioenergetics'],
      '1-2':['Protochordata & Agnatha','Pisces & Amphibia','Reptilia & Aves','Mammalia','Comparative anatomy \u2014 integument & skeletal system','Comparative anatomy \u2014 digestive & circulatory systems'],
      '2-1':['Cell structure & organelles','Cell division \u2014 mitosis & meiosis','Mendelian genetics & extensions','Chromosomal theory of inheritance','Linkage & crossing over','Mutation & chromosomal aberrations'],
      '2-2':['Digestion & respiration (comparative physiology)','Circulation & excretion','Nervous & endocrine systems','DNA replication, transcription & translation','Gene regulation','Recombinant DNA technology basics'],
      '3-1':['Gametogenesis & fertilization','Early embryonic development','Organogenesis','Theories of evolution (Darwinism, Neo-Darwinism)','Evidence & mechanisms of evolution','Speciation & population genetics'],
      '3-2':['Ecosystem structure & function','Population ecology','Animal behaviour (ethology)','Wildlife biology & conservation','Economic zoology (apiculture, sericulture)','Biotechnology applications in zoology']
    },
    botany: {
      '1-1':['Viruses & bacteria','Mycology \u2014 fungi classification & life cycles','Plant pathology & disease management','Carbohydrates, lipids & proteins','Enzymes','Nucleic acids'],
      '1-2':['Algae \u2014 classification & life cycles','Bryophytes','Pteridophytes','Gymnosperms','Plant taxonomy \u2014 classification systems & nomenclature','Plant ecology basics'],
      '2-1':['Water relations & mineral nutrition','Photosynthesis','Respiration','Plant growth & development (hormones)','Mendelian genetics in plants','Cytogenetics'],
      '2-2':['Plant cell structure & biology','DNA replication & gene expression in plants','Plant tissue culture','Genetic engineering in plants','Molecular markers','rDNA technology'],
      '3-1':['Economically important plants (cereals, pulses, fibres)','Medicinal & aromatic plants','Biodiversity & conservation','Plant cell ultrastructure','Cell signalling','Angiosperm anatomy'],
      '3-2':['Ecosystem dynamics','Environmental pollution & management','Phytogeography','Angiosperm embryology','Plant breeding','Palynology']
    }
  };

  var BSC_PW_UNITS = {
    physics: ['Mechanics','Electricity and Magnetism [Core \u2022 Sem II]','Thermal Physics and Statistical Mechanics','Waves and Optics','Digital and Analog Circuits and Instrumentation [DSE]','Elements of Modern Physics [DSE]','Mathematical Physics [DSE]','Solid State Physics [DSE]','Quantum Mechanics [DSE]','Embedded System: Introduction to Microcontrollers [DSE]','Nuclear and Particle Physics [DSE]','Medical Physics [DSE]','Physics Workshop Skill [SEC]','Computational Physics Skills [SEC]','Electrical Circuit Network Skills [SEC]','Basic Instrumentation Skills [SEC]','Renewable Energy and Energy Harvesting [SEC]','Mechanical Drawing [SEC]','Radiation Safety [SEC]','Applied Optics [SEC]','Weather Forecasting [SEC]'],
    chemistry: ['Atomic Structure','Periodicity','Chemical Bonding','s-Block Elements','p-Block Elements','Coordination Chemistry','Transition Elements','Lanthanides & Actinides','Organometallic Compounds','Bioinorganic Chemistry','Acids and Bases Chemistry','Inorganic Polymers','General Principles of Metallurgy','Structure & Bonding in Organic Molecules','Stereochemistry','Reaction Mechanisms (SN1/SN2/E1/E2)','Aliphatic Hydrocarbons','Aromatic Compounds & Aromaticity','Alcohols, Phenols & Ethers','Carbonyl Compounds','Halogen Compounds','Nitrogen-Containing Compounds (Amines, Diazonium Salts)','Carbohydrates','Amino Acids, Peptides & Proteins','Organic Spectroscopy (UV, IR, NMR)','Polymers & Dyes','Gaseous State','Liquid State','Solid State (Crystal Structure)','Thermodynamics & Thermochemistry','Chemical Equilibrium','Ionic Equilibrium (pH, Buffers, Hydrolysis)','Phase Equilibria','Solutions & Colligative Properties','Electrochemistry','Chemical Kinetics','Catalysis & Adsorption','Quantum Chemistry','Molecular Spectroscopy (Rotational/Vibrational/Raman)','Photochemistry','Nuclear Chemistry'],
    maths: ['Calculus','Algebra','Probability and Statistics','Real Analysis','Differential Equations','Theory of Real Functions','Group Theory 1','Multivariate Calculus','Discrete Mathematics','Partial Differential Equations','Riemann Integration & Series of Functions','Ring Theory & Linear Algebra-I','Metric Spaces','Group Theory-II','Numerical Analysis','Mathematical Statistics','Complex Analysis','Ring Theory and Linear Algebra-II','Number Theory','Linear Programming and Applications','Integral Transforms','Fundamentals of Topology','Integral Equations and Calculus of Variations'],
    zoology: ['Non-Chordates','Principles of Ecology','Non-Chordates II: Coelomates','Cell Biology','Diversity of Chordata','Animal Physiology','Biochemistry','Comparative Anatomy','Animal Physiology \u2014 Life Sustaining Systems','Biochemistry of Metabolic Processes','Molecular Biology','Genetics','Developmental Biology','Evolutionary Biology'],
    botany: ['Phycology (Algae)','Mycology (Fungi)','Microbiology (Bacteria and Viruses)','Mycoplasma','Lichens','Mycorrhiza','Bryology (Bryophytes)','Pteridology (Pteridophytes)','Gymnosperms','Paleobotany','Taxonomy of Angiosperms','Economic Botany','Ecology','Embryology and Morphogenesis','Plant Anatomy','Genetics','Plant Breeding','Plant Physiology','Plant Metabolism','Biochemistry','Cell Biology','Cell Organelles','Molecular Biology','Biotechnology','Mushroom Cultivation','Plant Pathology']
  };

  var bscState = { subject:null, year:'1', view:'year' };

  function bscOverview(){
    var cards = Object.keys(BSC_SUBJECTS).map(function(subj){
      var s = BSC_SUBJECTS[subj];
      return '<button type="button" class="exam-icon-card" data-bsc-subject="'+subj+'">'+
        '<span class="exam-icon">'+s.icon+'</span>'+
        '<b>'+s.name+'</b>'+
        '<span>3-year consolidated syllabus</span>'+
        '<em>Explore →</em>'+
      '</button>';
    }).join('');
    return back('Pharma') + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">PHARMA \u2014 B.SC</div>
        <h2>🔬 B.Sc \u2014 Physics, Chemistry, Maths, Zoology, Botany</h2>
        <p class="sub">A consolidated, university-agnostic unit list for each subject \u2014 built from the UGC CBCS model curriculum that most central universities base their own syllabus on. Tap a subject to explore it year by year.</p>
        <div class="exam-icon-grid" style="margin-top:22px;">${cards}</div>
      </section>`;
  }

  function bscSubjectDetail(subj){
    var s = BSC_SUBJECTS[subj];
    if(!s) return bscOverview();
    var yearTabs = ['1','2','3'].map(function(y){
      return '<button type="button" class="jee-tab-btn'+(y===bscState.year?' active':'')+'" data-bsc-year="'+y+'">Year '+y+'</button>';
    }).join('');
    var pwToggle = '<button type="button" class="jee-tab-btn bsc-pw-toggle'+(bscState.view==='pw'?' active':'')+'" data-bsc-view="pw">📌 Units Covered by PW</button>';
    var sem1 = BSC_UNITS[subj][bscState.year+'-1'] || [];
    var sem2 = BSC_UNITS[subj][bscState.year+'-2'] || [];
    function semColumn(label, units){
      var li = units.map(function(u,i){ return '<li><b>Unit '+(i+1)+'.</b> '+u+'</li>'; }).join('');
      return '<div class="bsc-sem-col"><div class="bsc-sem-label">'+label+'</div><ul class="bsc-unit-list">'+li+'</ul></div>';
    }
    var bodyHTML;
    if(bscState.view === 'pw'){
      var pwUnits = BSC_PW_UNITS[subj] || [];
      var pwList = pwUnits.map(function(u,i){ return '<li><b>'+(i+1)+'.</b> '+u+'</li>'; }).join('');
      bodyHTML = '<div class="bsc-pw-panel"><div class="bsc-sem-label">Units Covered by PW \u2014 '+s.name+'</div><ul class="bsc-unit-list bsc-pw-list">'+pwList+'</ul>'+
        '<div class="ca-step-note" style="margin-top:10px;">This is PW\u2019s own internal curriculum tracker (Gurukul Honors) \u2014 not tied to a specific year/semester, since PW\u2019s own pacing can differ from the university calendar shown in the Year view.</div></div>';
    } else {
      bodyHTML = '<div class="bsc-sem-grid" style="margin-top:6px;">'+semColumn('Semester '+(parseInt(bscState.year)*2-1), sem1)+semColumn('Semester '+(parseInt(bscState.year)*2), sem2)+'</div>'+
        '<div class="ca-step-note" style="margin-top:14px;">This is a consolidated reference spanning common CBCS-based papers \u2014 always cross-check against the specific university\u2019s current syllabus, since elective (DSE/SEC) choices can add or swap a unit or two.</div>';
    }
    return '<button class="cid-back" type="button" data-bsc-back-grid style="margin-top:22px;">← Back to B.Sc</button>' + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">PHARMA \u2014 B.SC \u2014 ${s.name.toUpperCase()}</div>
        <h2>${s.icon} ${s.name}</h2>
        <p class="sub">Consolidated CBCS-based unit list, year by year \u2014 or switch to see what PW itself covers.</p>
        <div class="jee-tabbar" style="margin-top:18px;gap:8px;flex-wrap:wrap;">${yearTabs}${pwToggle}</div>
        <div style="margin-top:18px;">${bodyHTML}</div>
      </section>`;
  }

  function overview(){
    var cards = Object.keys(PHARMA_TABS).map(function(k){
      var t = PHARMA_TABS[k];
      return '<button type="button" class="ca-level-card" data-pharma-open="'+k+'">'+
        '<span class="ca-level-icon">'+t.icon+'</span>'+
        '<b>'+t.name+'</b>'+
        '<span>'+t.sub+'</span>'+
        '<em>Explore →</em>'+
      '</button>';
    }).join('');
    return `
      <section class="upsc-section" style="margin-top:28px;">
        <div class="cid-kicker">PHARMA INTELLIGENCE</div>
        <h1 style="margin:8px 0 8px;">Pharmacy (B.Pharm / M.Pharm)</h1>
        <p class="sub">From the B.Pharm curriculum to postgraduate entrance (GPAT) and government career routes.</p>
        <div class="ca-level-grid" style="margin-top:22px;">${cards}</div>
      </section>`;
  }

  function chipList(arr){
    return '<div class="ca-topic-chips">' + arr.map(function(t){ return '<span class="ca-topic-chip">'+t+'</span>'; }).join('') + '</div>';
  }

  function gpatDetail(){
    var niperRows = [
      ['NIPER S.A.S. Nagar (Mohali)', 'Punjab', 'Flagship institute (est. 1998); NIRF Pharmacy Rank ~ top 5'],
      ['NIPER Hyderabad', 'Telangana', 'NIRF Pharmacy Rank ~2 among NIPERs; strong industry links'],
      ['NIPER Ahmedabad', 'Gujarat (campus at Gandhinagar)', 'Focus on Pharma management & entrepreneurship'],
      ['NIPER Kolkata', 'West Bengal', 'Growing research collaborations'],
      ['NIPER Guwahati', 'Assam', 'Northeast regional focus'],
      ['NIPER Hajipur', 'Bihar', 'Focus on pharmaceutical analysis & pharmacology'],
      ['NIPER Raebareli', 'Uttar Pradesh', 'Medicinal chemistry & clinical research tie-ups']
    ];
    var niperTrs = niperRows.map(function(r){ return '<tr><td><b>'+r[0]+'</b></td><td>'+r[1]+'</td><td>'+r[2]+'</td></tr>'; }).join('');

    return back('Pharma') + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">GPAT</div>
        <h2>🎓 GPAT \u2014 Graduate Pharmacy Aptitude Test</h2>
        <p class="sub">National-level entrance exam for M.Pharm admission and AICTE scholarship eligibility across India.</p>

        <div class="ca-timeline" style="margin-top:26px;">
          <div class="ca-step">
            <div class="ca-step-dot">1</div>
            <div class="ca-step-label">Exam Overview</div>
            <div class="ca-step-card">Conducted by <b>NBEMS</b> (National Board of Examinations in Medical Sciences), on behalf of the Pharmacy Council of India \u2014 the conducting body has changed over the years (AICTE \u2192 NTA \u2192 currently NBEMS). Held once a year, usually in March, as a Computer-Based Test (CBT). Result feeds both M.Pharm admissions and the AICTE PG scholarship list.</div>
          </div>
          <div class="ca-step">
            <div class="ca-step-dot">2</div>
            <div class="ca-step-label">Eligibility Criterion</div>
            <div class="ca-step-card">A 4-year B.Pharm degree (10+2+4 pattern, including lateral entry) or equivalent from a recognised university \u2014 final/pre-final year students awaiting result can also apply. Indian nationals only. <b>No upper age limit</b> and no cap on number of attempts. B.Tech (Pharmaceutical &amp; Fine Chemical Technology) candidates are <b>not eligible</b>.</div>
          </div>
          <div class="ca-step">
            <div class="ca-step-dot">3</div>
            <div class="ca-step-label">Paper Pattern</div>
            <div class="ca-step-card">125 MCQs, <b>4 marks each</b> (500 marks total), single session, English only. <b>Negative marking:</b> 1 mark deducted per wrong answer. General category cutoff has hovered around the 96th percentile (roughly 213\u2013216/500) in recent years, qualifying about the top 10% of appeared candidates.</div>
          </div>
          <div class="ca-step">
            <div class="ca-step-dot">4</div>
            <div class="ca-step-label">Subjects & Topics</div>
            <div class="ca-step-card">
              Syllabus is drawn from the entire B.Pharm curriculum (~19 subjects). Official 2026 question-wise weightage:
              <div style="overflow:auto;margin-top:10px;">
              <table class="mba-cutoff-table"><thead><tr><th>Subject</th><th>Questions</th><th>Marks</th></tr></thead><tbody>
              <tr><td>Pharmaceutical Chemistry</td><td>38</td><td>152</td></tr>
              <tr><td>Pharmaceutics</td><td>38</td><td>152</td></tr>
              <tr><td>Pharmacology</td><td>28</td><td>112</td></tr>
              <tr><td>Pharmacognosy</td><td>10</td><td>40</td></tr>
              <tr><td>Other subjects (Analysis, Biochemistry, Pathophysiology, Microbiology, Jurisprudence, etc.)</td><td>11</td><td>44</td></tr>
              <tr><td><b>Total</b></td><td><b>125</b></td><td><b>500</b></td></tr>
              </tbody></table>
              </div>
              <div class="ca-step-note">Pharmaceutical Chemistry + Pharmaceutics alone account for over 60% of total marks \u2014 the highest-leverage subjects to prioritise.</div>
            </div>
          </div>
          <div class="ca-step">
            <div class="ca-step-dot">5</div>
            <div class="ca-step-label">GPAT Cutoff (Category-wise)</div>
            <div class="ca-step-card">
              Official GPAT 2026 qualifying cutoff (released 7 April 2026, out of 500):
              <div style="overflow:auto;margin-top:10px;">
              <table class="mba-cutoff-table"><thead><tr><th>Category</th><th>Cutoff Marks</th><th>Percentile</th></tr></thead><tbody>
              <tr><td>General (UR)</td><td><span class="mba-cutoff-badge">213</span></td><td>96.25</td></tr>
              <tr><td>EWS</td><td><span class="mba-cutoff-badge">180</span></td><td>90.82</td></tr>
              <tr><td>OBC-NCL</td><td><span class="mba-cutoff-badge">177</span></td><td>90.09</td></tr>
              <tr><td>SC</td><td><span class="mba-cutoff-badge">142</span></td><td>76.45</td></tr>
              <tr><td>ST</td><td><span class="mba-cutoff-badge">116</span></td><td>59.19</td></tr>
              <tr><td>General \u2014 PwBD</td><td><span class="mba-cutoff-badge">104</span></td><td>48.98</td></tr>
              </tbody></table>
              </div>
              <div class="ca-step-note">Cutoff shifts every year with paper difficulty and number of candidates (General was 216/500 in 2025). Only the top ~10% of appeared candidates qualify overall. Verify the current year's NBEMS notification before advising a student.</div>
            </div>
          </div>
          <div class="ca-step">
            <div class="ca-step-dot">6</div>
            <div class="ca-step-label">Benefits of GPAT</div>
            <div class="ca-step-card">
              <ul style="margin:0;padding-left:18px;">
                <li>Admission to M.Pharm programmes at AICTE-approved government, government-aided and private institutions nationwide</li>
                <li><b>AICTE PG Scholarship of ₹12,400/month for 24 months</b> (via Direct Benefit Transfer) for GPAT-qualified students at AICTE-approved govt/govt-aided colleges \u2014 private unaided colleges don't qualify</li>
                <li>A valid GPAT score/qualification is generally required as an eligibility criterion for NIPER's M.S.(Pharm)/M.Pharm admission (final NIPER seat is via the separate NIPER-JEE merit list)</li>
                <li>Stronger footing for Drug Inspector, academic and R&amp;D roles that prefer or require a PG pharmacy qualification</li>
              </ul>
            </div>
          </div>
          <div class="ca-step">
            <div class="ca-step-dot">7</div>
            <div class="ca-step-label">Top NIPER Colleges</div>
            <div class="ca-step-card">
              <p style="margin:0 0 10px;">There are <b>7 NIPERs</b> (Institutes of National Importance) across India. Admission is via the separate <b>NIPER-JEE</b> exam, with a valid GPAT score/qualification typically required as an eligibility criterion.</p>
              <div style="overflow:auto;">
              <table class="mba-cutoff-table"><thead><tr><th>Institute</th><th>Location</th><th>Notes</th></tr></thead><tbody>${niperTrs}</tbody></table>
              </div>
            </div>
          </div>
          <div class="ca-step">
            <div class="ca-step-dot">8</div>
            <div class="ca-step-label">Career After GPAT & M.Pharm</div>
            <div class="ca-step-card">
              ${chipList(['R&D Scientist (pharma/biotech companies)','Regulatory Affairs','Clinical Research / CRO roles','Quality Assurance & Quality Control','Drug Inspector (with required experience per state rules)','Academia / Teaching (M.Pharm is the minimum PCI norm for faculty)','Pharmacovigilance','Medical & Scientific Writing','Pharma Marketing Management','PhD / further research (via NIPER, IITs, central universities)'])}
              <div class="ca-step-note">NIPER graduates specifically report 80\u201395% placement rates, recruited by companies like Dr. Reddy's, Biocon, GSK, IQVIA and ZS Associates.</div>
            </div>
          </div>
        </div>
      </section>`;
  }

  function vacancyDetail(){
    var vacancies = [
      { key: 'rrb', name: 'Railway Pharmacist (RRB)', post: 'Pharmacist Entry Grade, Pay Level 5', qual: 'B.Pharm / Pharm.D (D.Pharm no longer accepted in latest notifications)',
        pattern: 'Single-stage <b>CBT, 90 minutes, 100 questions / 100 marks</b>. Sections: Professional Ability (Pharmacy) \u2014 70 marks, General Awareness \u2014 10, General Science \u2014 10, General Arithmetic & Reasoning \u2014 10. Followed by Document Verification and a Medical Examination.',
        topics: ['Pharmacology','Pharmaceutics','Pharmaceutical Chemistry','Pharmacognosy','Biotechnology','Quality Assurance','Pharmacy Practice','General Science','General Arithmetic','Reasoning','Current Affairs'],
        marking: '<b>+1 mark</b> for every correct answer, <b>\u22121/3 mark</b> deducted for every wrong answer. No marks for unattempted questions.' },
      { key: 'esic', name: 'ESIC Pharmacist', post: 'Pharmacist at ESIC hospitals & dispensaries', qual: 'D.Pharm/B.Pharm + State Pharmacy Council registration',
        pattern: 'Single written CBT, <b>2 hours</b>, all MCQs, historically <b>125 marks</b> (confirm current total from the live notification, as this has varied across cycles). Split between a Technical (Pharmacy) section and a General Aptitude & Awareness section (reasoning, current affairs).',
        topics: ['Pharmaceutics','Pharmacology','Hospital Pharmacy','Pharmacy Law / Jurisprudence','Coding-Decoding','Number & Alphabet Series','Clocks & Calendars','Arithmetical Reasoning','Statements & Arguments'],
        marking: '<b>0.25 mark</b> deducted for every wrong answer (negative marking).' },
      { key: 'aiims', name: 'AIIMS Pharmacist (CRE)', post: 'Common Recruitment Exam across AIIMS locations', qual: 'D.Pharm/B.Pharm + registration',
        pattern: 'Single CBT, <b>90 minutes, 100 MCQs, 400 marks</b> (4 marks/question), run across 5 timed sections (18 min each). <b>Part 1 \u2014 General Paper</b>: 20 questions / 80 marks (General Knowledge, Aptitude, Computer Knowledge, common to all posts). <b>Part 2 \u2014 Domain-specific (Pharmacy)</b>: 80 questions / 320 marks, based on Diploma or Degree level.',
        topics: ['Pharmacology','Pharmaceutics','Pharmaceutical Chemistry','Pharmacognosy','Hospital Pharmacy','Pharmacy Act, 1948 & other pharmacy laws','General Knowledge & Current Affairs','Computer Knowledge','Quantitative Aptitude & Reasoning'],
        marking: '<b>\u22121/4 mark (0.25)</b> deducted per wrong answer. Qualifying marks: <b>40% (UR/EWS), 35% (OBC), 30% (SC/ST/PwBD)</b>.' },
      { key: 'state', name: 'State Health Dept. Pharmacist', post: 'Via State PSC / State Health Recruitment Boards \u2014 largest volume of vacancies', qual: 'D.Pharm/B.Pharm + State Pharmacy Council registration (varies by state)',
        pattern: 'Pattern is <b>set independently by each state</b> \u2014 generally a CBT/OMR-based MCQ test covering Pharmacy subjects plus General Knowledge/Reasoning, sometimes followed by an interview or document verification. Marks, duration and sections vary state to state \u2014 always check that state\u2019s specific notification.',
        topics: ['Pharmacology','Pharmaceutics','Pharmaceutical Chemistry','Pharmacognosy','Pharmaceutical Jurisprudence','Hospital & Clinical Pharmacy','State-specific General Knowledge'],
        marking: 'Varies by state \u2014 many follow a small negative-marking rule (commonly 1/4 or 1/3 per wrong answer), but this is not universal. Confirm from the specific state\u2019s notification.' },
      { key: 'nhm', name: 'NHM Pharmacist', post: 'National Health Mission \u2014 mostly contractual, state-wise', qual: 'D.Pharm/B.Pharm + registration',
        pattern: 'State-wise contractual recruitment, typically a CBT/written MCQ test on core Pharmacy subjects plus general aptitude; some states also weigh a merit list on academic marks alongside (or instead of) a written exam. No single fixed national pattern.',
        topics: ['Pharmacology','Pharmaceutics','Pharmaceutical Chemistry','Pharmacognosy','Community & Public Health Pharmacy','General Awareness'],
        marking: 'Varies by state NHM notification \u2014 some have no written exam at all (merit-based), others use standard MCQ negative marking. Confirm from the specific state\u2019s NHM notification.' },
      { key: 'army', name: 'Army / AFMS Pharmacist', post: 'Army Medical Corps pharmacist posts', qual: 'B.Pharm/D.Pharm + registration; defence medical standards apply',
        pattern: 'Written test (objective, Pharmacy + General subjects) followed by a Physical/Medical fitness standard specific to defence recruitment, and document verification. Exact marks/duration are set by the specific AFMS/Army Medical Corps notification for that recruitment cycle.',
        topics: ['Pharmacology','Pharmaceutics','Pharmaceutical Chemistry','Pharmacognosy','Hospital Pharmacy','General Knowledge','General Science'],
        marking: 'Set per notification; defence recruitment also applies physical/medical fitness standards alongside the written test score.' },
      { key: 'drug', name: 'Drug Inspector', post: 'State Drug Control / CDSCO (Central)', qual: 'B.Pharm/M.Pharm/Pharm.D \u2014 often with 1\u20133 years experience, varies by state D&C Act rules',
        pattern: 'Typically a written exam (objective and/or descriptive depending on the state/UPSC notification) covering Pharmacy + Pharmaceutical Jurisprudence, often followed by an interview. This is the most senior of the listed posts and recruitment is infrequent \u2014 there is no single fixed national pattern; each state and the central CDSCO route set their own exam structure.',
        topics: ['Pharmaceutical Chemistry','Pharmacology','Pharmaceutics','Drugs & Cosmetics Act, 1940 and Rules','Pharmacy Act, 1948','Quality Control & GMP','General Studies (for some state exams)'],
        marking: 'Varies by state/UPSC notification \u2014 no single fixed rule; confirm from the specific recruiting authority.' },
      { key: 'dsssb', name: 'DSSSB Pharmacist', post: 'Delhi govt hospitals/dispensaries', qual: 'D.Pharm/B.Pharm + registration',
        pattern: 'Single CBT, objective MCQ, covering Pharmacy subjects plus General Awareness/Reasoning/Quantitative Aptitude \u2014 in line with DSSSB\u2019s standard paper structure for technical posts. Exact marks and duration are notified per DSSSB recruitment cycle.',
        topics: ['Pharmacology','Pharmaceutics','Pharmaceutical Chemistry','Pharmacognosy','Hospital Pharmacy','General Awareness','Reasoning','Quantitative Aptitude'],
        marking: 'DSSSB technical papers commonly use <b>0.25 negative marking</b> per wrong answer, but confirm against the specific post\u2019s notification.' },
      { key: 'psu', name: 'PSU Pharma Companies', post: 'e.g. HLL Lifecare \u2014 Pharmacist/Officer Trainee roles', qual: 'B.Pharm/M.Pharm depending on post',
        pattern: 'Set independently by each PSU \u2014 typically a written test (technical Pharmacy knowledge + general aptitude) followed by a Group Discussion/Interview for officer-level roles. No fixed national pattern; refer to the specific PSU\u2019s recruitment notification.',
        topics: ['Pharmaceutics','Pharmacology','Pharmaceutical Chemistry','Quality Assurance/GMP','Regulatory Affairs basics','General Aptitude'],
        marking: 'Set per PSU notification \u2014 no universal rule across companies.' }
    ];

    var accordionHTML = vacancies.map(function(v){
      var topicsHTML = v.topics.map(function(t){ return '<span class="ca-topic-chip">'+t+'</span>'; }).join('');
      return '<div class="ca-paper-item" data-ca-paper-id="vac-'+v.key+'">'+
        '<div class="ca-paper-head" data-ca-paper-toggle="vac-'+v.key+'">'+
          '<span class="ca-paper-head-left"><b>'+v.name+'</b> \u2014 '+v.post+'</span>'+
          '<span class="ca-paper-head-right"><span class="ca-subject-type">'+v.qual+'</span><span class="ca-paper-chevron">▶</span></span>'+
        '</div>'+
        '<div class="ca-paper-body">'+
          '<div class="ca-paper-body-inner">'+
            '<div class="ca-paper-subhead">Exam Pattern</div>'+
            '<div class="ca-qcount-box">'+v.pattern+'</div>'+
            '<div class="ca-paper-subhead">Syllabus & Topics</div>'+
            '<div class="ca-topic-chips">'+topicsHTML+'</div>'+
            '<div class="ca-paper-subhead">Marking Structure</div>'+
            '<div class="ca-qcount-box">'+v.marking+'</div>'+
          '</div>'+
        '</div>'+
      '</div>';
    }).join('');

    return back('Pharma') + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">GOVERNMENT VACANCIES</div>
        <h2>🏛️ Government Pharmacist Vacancies</h2>
        <p class="sub">Unlike GPAT, this isn't one fixed exam \u2014 it's a landscape of separate recruiters. Tap any recruiter below for its own exam pattern, syllabus and marking structure.</p>

        <div style="margin-top:22px;">${accordionHTML}</div>
      </section>`;
  }

  var BPHARM_YEARS = [
    { year: 1, sems: [
        { label: 'Semester 1', subjects: ['Human Anatomy & Physiology I', 'Pharmaceutical Analysis I', 'Pharmaceutics I', 'Pharmaceutical Inorganic Chemistry', 'Communication Skills', 'Remedial Biology / Mathematics (as applicable)'] },
        { label: 'Semester 2', subjects: ['Human Anatomy & Physiology II', 'Pharmaceutical Organic Chemistry I', 'Biochemistry', 'Pathophysiology', 'Computer Applications in Pharmacy', 'Environmental Sciences'] }
    ]},
    { year: 2, sems: [
        { label: 'Semester 3', subjects: ['Pharmaceutical Organic Chemistry II', 'Physical Pharmaceutics I', 'Pharmaceutical Microbiology', 'Pharmaceutical Engineering'] },
        { label: 'Semester 4', subjects: ['Pharmaceutical Organic Chemistry III', 'Medicinal Chemistry I', 'Physical Pharmaceutics II', 'Pharmacology I', 'Pharmacognosy & Phytochemistry I'] }
    ]},
    { year: 3, sems: [
        { label: 'Semester 5', subjects: ['Medicinal Chemistry II', 'Industrial Pharmacy I', 'Pharmacology II', 'Pharmacognosy & Phytochemistry II', 'Pharmaceutical Jurisprudence'] },
        { label: 'Semester 6', subjects: ['Medicinal Chemistry III', 'Pharmacology III', 'Herbal Drug Technology', 'Biopharmaceutics & Pharmacokinetics', 'Pharmaceutical Biotechnology', 'Quality Assurance'] }
    ]},
    { year: 4, sems: [
        { label: 'Semester 7', subjects: ['Instrumental Methods of Analysis', 'Industrial Pharmacy II', 'Pharmacy Practice', 'Novel Drug Delivery Systems', 'Elective I', 'Elective II'] },
        { label: 'Semester 8', subjects: ['Biostatistics & Research Methodology', 'Social & Preventive Pharmacy', 'Pharma Marketing Management / Quality Control of Herbals (elective)', 'Project Work & Practical Training'] }
    ]}
  ];

  function semesterDetail(){
    var tabs = BPHARM_YEARS.map(function(y, i){
      return '<button type="button" class="jee-tab-btn'+(i===0?' active':'')+'" data-pharma-year="'+y.year+'">Year '+y.year+'</button>';
    }).join('');
    var panels = BPHARM_YEARS.map(function(y, i){
      var cols = y.sems.map(function(s){
        return '<div class="pharma-sem-card"><h4>'+s.label+'</h4><ul>'+s.subjects.map(function(sub){ return '<li>'+sub+'</li>'; }).join('')+'</ul></div>';
      }).join('');
      return '<div class="pharma-year-panel'+(i===0?' active':'')+'" data-pharma-year-panel="'+y.year+'"><div class="pharma-sem-cols">'+cols+'</div></div>';
    }).join('');

    return back('Pharma') + `
      <section class="upsc-section" style="margin-top:18px;">
        <div class="cid-kicker">B.PHARM SEMESTER-WISE</div>
        <h2>📚 B.Pharm \u2014 Year & Semester-wise Subjects</h2>
        <p class="sub">4-year, 8-semester PCI-regulated curriculum. Pick a year to see what's covered each semester.</p>
        <div class="pharma-tab-row">${tabs}</div>
        ${panels}
        <div class="upsc-note" style="margin-top:20px;">Reflects the PCI syllabus most currently enrolled batches (2nd\u20134th year in 2026) are studying. A revised NEP-2020-aligned syllabus (with added subjects like AI in Pharmacy and Healthcare Psychology) applies from students admitted in the 2026\u201327 academic session onward \u2014 confirm which syllabus version applies to a specific student's admission year.</div>
      </section>`;
  }

  function bind(){
    var r = root();
    if(!r) return;
    r.querySelectorAll('[data-pharma-open]').forEach(function(btn){
      btn.onclick = function(){ render(this.getAttribute('data-pharma-open')); };
    });
    r.querySelectorAll('[data-pharma-back]').forEach(function(btn){
      btn.onclick = function(){ render('overview'); };
    });
    r.querySelectorAll('[data-ca-paper-toggle]').forEach(function(head){
      head.onclick = function(){
        var id = this.getAttribute('data-ca-paper-toggle');
        var item = r.querySelector('[data-ca-paper-id="'+id+'"]');
        if(item) item.classList.toggle('open');
      };
    });
    var yearTabs = r.querySelectorAll('[data-pharma-year]');
    if(yearTabs.length){
      yearTabs.forEach(function(btn){
        btn.onclick = function(){
          var y = this.getAttribute('data-pharma-year');
          yearTabs.forEach(function(b){ b.classList.remove('active'); });
          this.classList.add('active');
          r.querySelectorAll('[data-pharma-year-panel]').forEach(function(p){
            p.classList.toggle('active', p.getAttribute('data-pharma-year-panel') === y);
          });
        };
      });
    }
    r.querySelectorAll('[data-bsc-subject]').forEach(function(btn){
      btn.onclick = function(){
        bscState.subject = this.getAttribute('data-bsc-subject');
        bscState.year = '1';
        bscState.view = 'year';
        render('bsc:'+bscState.subject);
      };
    });
    r.querySelectorAll('[data-bsc-back-grid]').forEach(function(btn){
      btn.onclick = function(){ render('bsc'); };
    });
    r.querySelectorAll('[data-bsc-year]').forEach(function(btn){
      btn.onclick = function(){
        bscState.year = this.getAttribute('data-bsc-year');
        bscState.view = 'year';
        render('bsc:'+bscState.subject);
      };
    });
    r.querySelectorAll('[data-bsc-view]').forEach(function(btn){
      btn.onclick = function(){
        bscState.view = this.getAttribute('data-bsc-view');
        render('bsc:'+bscState.subject);
      };
    });
  }

  function render(view){
    var r = root();
    if(!r) return;
    r.style.display = 'block';
    if(view === 'gpat') r.innerHTML = gpatDetail();
    else if(view === 'vacancy') r.innerHTML = vacancyDetail();
    else if(view === 'semester') r.innerHTML = semesterDetail();
    else if(view === 'bsc') r.innerHTML = bscOverview();
    else if(view && view.indexOf('bsc:') === 0) r.innerHTML = bscSubjectDetail(view.slice(4));
    else r.innerHTML = overview();
    bind();
  }

  var previousOpenCategory = window.cidOpenCategory;
  window.cidOpenCategory = function(name){
    if(name === 'PHARMA' || name === 'Pharma'){
      document.body.classList.remove('cid-home-mode');
      document.body.classList.add('cid-category-mode');
      if(typeof window.cidRenderCategorySidebar === 'function'){
        window.cidRenderCategorySidebar('Pharma', 'B.Pharm / M.Pharm', [
          {key:'overview', label:'Pharma Overview'},
          {key:'gpat', label:'GPAT'},
          {key:'vacancy', label:'Govt Vacancies'},
          {key:'semester', label:'Semester'},
          {key:'bsc', label:'B.Sc'}
        ], 'overview', function(key){
          var backBtn = document.querySelector('[data-pharma-back]');
          if(backBtn) backBtn.click();
          if(key !== 'overview'){
            var openBtn = document.querySelector('[data-pharma-open="'+key+'"]');
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
        if(label) label.textContent = 'Pharma';
      }
      render('overview');
      return;
    }
    if(typeof previousOpenCategory === 'function') return previousOpenCategory(name);
  };
})();
