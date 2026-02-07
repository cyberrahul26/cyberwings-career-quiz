// CyberWings Security Quiz — © Rahul Kumar
// PROPRIETARY NOTICE: Hosting/copying on other platforms prohibited without written permission.

(function () {
  "use strict";

  // Frame-buster (prevents embedding on other sites)
  try {
    if (window.top !== window.self) {
      window.top.location = window.location;
    }
  } catch (e) {
    // If browser blocks access to window.top, force redirect as fallback
    window.location = window.location;
  }

  const QUESTIONS = [
    { t: "A system gets hacked. What excites you the most?",
      o: {
        A: "Finding out how the attacker broke in",
        B: "Detecting the attack quickly and stopping it",
        C: "Figuring out why controls failed and fixing policies",
        D: "Collecting evidence and reconstructing the incident"
      } },
    { t: "Which activity sounds most enjoyable to you?",
      o: {
        A: "Breaking a test system to prove it’s vulnerable",
        B: "Watching logs and spotting suspicious behavior",
        C: "Designing security rules and frameworks",
        D: "Analyzing files, memory, and timelines after an incident"
      } },
    { t: "You are given a complex system. Your instinct is to…",
      o: { A: "Try to bypass it", B: "Monitor it continuously", C: "Review its design and risk", D: "Preserve it and investigate anomalies" } },
    { t: "What gives you the most satisfaction?",
      o: { A: "“I exploited it successfully”", B: "“I detected it before damage happened”", C: "“I prevented this class of risk permanently”", D: "“I proved exactly what happened and when”" } },

    { t: "How do you prefer to learn?",
      o: { A: "Hands-on labs where things break", B: "Dashboards, alerts, and patterns", C: "Reading standards, documentation, and architecture", D: "Case studies, reports, and investigations" } },
    { t: "Your favorite kind of challenge is…",
      o: { A: "Technical puzzles and exploits", B: "Pattern recognition under pressure", C: "Balancing security with business needs", D: "Deep analysis of limited data" } },
    { t: "You are most comfortable when your work is…",
      o: { A: "Offensive and experimental", B: "Operational and real-time", C: "Strategic and structured", D: "Methodical and evidence-driven" } },
    { t: "Which phrase describes you best?",
      o: { A: "“Let me try something crazy”", B: "“Something feels wrong here”", C: "“This risk isn’t being managed properly”", D: "“Let’s reconstruct the truth”" } },

    { t: "Which toolset sounds more appealing?",
      o: { A: "Metasploit, Burp Suite, custom exploits", B: "SIEM, EDR, threat intelligence feeds", C: "Risk matrices, compliance frameworks, architecture diagrams", D: "Forensic tools, memory analyzers, timeline builders" } },
    { t: "If tools didn’t exist, you would rely more on…",
      o: { A: "Creativity and technical depth", B: "Observation and correlation", C: "Structure and governance", D: "Logic and evidence" } },
    { t: "You enjoy work that is…",
      o: { A: "High risk, high reward", B: "Fast-paced and alert-driven", C: "Policy-driven and impact-focused", D: "Quiet, focused, and analytical" } },
    { t: "What stresses you the least?",
      o: { A: "Systems breaking", B: "High-volume alerts", C: "Explaining security to management", D: "Long investigations" } },

    { t: "A phishing attack succeeds. What do you want to do FIRST?",
      o: { A: "Exploit the same weakness to prove impact", B: "Hunt for lateral movement", C: "Review awareness and access policies", D: "Preserve email headers and artifacts" } },
    { t: "During an incident, you prefer to…",
      o: { A: "Find another way in", B: "Contain and monitor", C: "Coordinate response and reporting", D: "Document everything carefully" } },
    { t: "Which mistake annoys you the most?",
      o: { A: "Poor coding", B: "Missed alerts", C: "Lack of security planning", D: "Poor evidence handling" } },
    { t: "Your ideal workday involves mostly…",
      o: { A: "Testing systems", B: "Monitoring environments", C: "Designing controls", D: "Investigating incidents" } },

    { t: "In 5 years, you want to be known as…",
      o: { A: "“That person who can break anything”", B: "“The one who always spots attacks early”", C: "“The one who designs secure systems”", D: "“The one who solves the hardest cases”" } },
    { t: "Which headline excites you most?",
      o: { A: "“New zero-day discovered”", B: "“Advanced attack detected in time”", C: "“Enterprise security architecture revamped”", D: "“Major cybercrime investigation solved”" } },
    { t: "You feel most confident when…",
      o: { A: "You control the system", B: "You understand the environment", C: "You understand the risk", D: "You understand the evidence" } },
    { t: "Your natural role in a team is…",
      o: { A: "Challenger", B: "Watcher", C: "Planner", D: "Investigator" } }
  ];

  function roadmapRed() {
    return `
      <div class="mini muted">Goal: build exploit intuition + proof via writeups and labs.</div>
      <ul class="list">
        <li><strong>0–30 days:</strong> Web basics (HTTP, cookies, sessions), Burp fundamentals, OWASP Top 10 labs.</li>
        <li><strong>31–60 days:</strong> Network scanning concepts (TCP flags), service enumeration, basic Linux privilege escalation.</li>
        <li><strong>61–90 days:</strong> Full mini engagement: recon → exploit (lab) → report with remediation.</li>
        <li><strong>Portfolio:</strong> 10 writeups (clear methodology), 1 full report template, 1 custom script/tool.</li>
        <li><strong>Cert direction:</strong> Security+ (if needed) → eJPT / hands-on pentest cert later.</li>
      </ul>`;
  }
  function roadmapBlue() {
    return `
      <div class="mini muted">Goal: detection + triage capability with real logs.</div>
      <ul class="list">
        <li><strong>0–30 days:</strong> Windows logs (logon, process creation), Linux auth logs, basic MITRE mapping.</li>
        <li><strong>31–60 days:</strong> Build SIEM dashboards, write 5 detections (bruteforce, suspicious PowerShell, new admin user).</li>
        <li><strong>61–90 days:</strong> Run attack simulations (lab) and do full triage notes + containment plan.</li>
        <li><strong>Portfolio:</strong> “Home SOC” repo: detections, dashboards screenshots, investigation playbooks.</li>
        <li><strong>Cert direction:</strong> Security+ → CySA+ (or SOC-focused path) after fundamentals.</li>
      </ul>`;
  }
  function roadmapGrc() {
    return `
      <div class="mini muted">Goal: translate technical risk into durable controls and architecture.</div>
      <ul class="list">
        <li><strong>0–30 days:</strong> Learn NIST CSF/ISO 27001 concepts, asset-threat-control thinking, basic cloud networking.</li>
        <li><strong>31–60 days:</strong> Build a security baseline: IAM least privilege, logging, segmentation, backup strategy.</li>
        <li><strong>61–90 days:</strong> Create a risk register + control mapping for a sample org + architecture diagram (text-based is fine).</li>
        <li><strong>Portfolio:</strong> Security architecture pack: policies, risk register, control mapping, reference design.</li>
        <li><strong>Cert direction:</strong> Security+ → cloud fundamentals cert → role-specific governance cert later.</li>
      </ul>`;
  }
  function roadmapDfir() {
    return `
      <div class="mini muted">Goal: evidence discipline + incident narrative building.</div>
      <ul class="list">
        <li><strong>0–30 days:</strong> Evidence handling mindset, artifact basics (logs, browser history, persistence locations).</li>
        <li><strong>31–60 days:</strong> Memory basics (process trees, network connections), build timelines from multiple sources.</li>
        <li><strong>61–90 days:</strong> Casework: investigate 3 “incidents” in a lab and produce formal reports.</li>
        <li><strong>Portfolio:</strong> 5 investigation reports, 3 timelines, 1 playbook for triage → containment.</li>
        <li><strong>Cert direction:</strong> Security+ → DFIR specialization (tool-focused training) after core skills.</li>
      </ul>`;
  }

  const TRACKS = {
    A: {
      title: "Offensive Security (Red Team) — You are a Breaker",
      tag: "Track A",
      why: "You are energized by discovering how systems fail, proving impact, and exploring technical boundaries. You learn best by breaking and reverse-engineering assumptions.",
      roles: ["Penetration Tester", "Red Team Operator", "Vulnerability Researcher", "Exploit Development (long-term)"],
      roadmapHtml: roadmapRed(),
      next: [
        "Build a legal lab: Kali + 2 vulnerable VMs + Burp practice target.",
        "Complete 30–50 labs and publish 10 high-quality writeups.",
        "Learn networking + OS basics deeply (processes, memory, permissions).",
        "Start Security+ only if you need HR filtering; later eJPT/OSCP path."
      ]
    },
    B: {
      title: "Defensive Security (Blue Team) — You are a Guardian",
      tag: "Track B",
      why: "You naturally watch for weak signals and patterns, prefer containment and response, and like building detection that prevents damage.",
      roles: ["SOC Analyst (Tier 1/2)", "Threat Hunter", "Detection Engineer", "Incident Response (Blue side)"],
      roadmapHtml: roadmapBlue(),
      next: [
        "Stand up a mini-SIEM at home (ELK or Splunk Free) and ingest logs.",
        "Learn Windows Event IDs + Linux auth logs; build 5 detections.",
        "Simulate small attacks in a lab and trace artifacts end-to-end.",
        "Map findings to MITRE ATT&CK and write investigation notes."
      ]
    },
    C: {
      title: "Security Architecture / GRC / Cloud Security — You are a Strategist",
      tag: "Track C",
      why: "You think in systems, risk, and long-term control design. You enjoy creating structures that prevent entire classes of failures.",
      roles: ["Security Analyst (GRC)", "Security Architect (path)", "Cloud Security Engineer", "Risk & Compliance Specialist"],
      roadmapHtml: roadmapGrc(),
      next: [
        "Learn NIST CSF / ISO 27001 basics and practice control mapping.",
        "Design a secure reference architecture for a small org.",
        "Build a cloud sandbox and implement least privilege + segmentation.",
        "Create a simple risk register for your lab and propose mitigations."
      ]
    },
    D: {
      title: "DFIR & Forensics / Malware Analysis — You are an Investigator",
      tag: "Track D",
      why: "You are evidence-driven, patient, and focused on reconstructing truth: what happened, how, when, and what changed.",
      roles: ["Incident Responder", "Digital Forensics Analyst", "Malware Analyst (path)", "Threat Research / Intel (path)"],
      roadmapHtml: roadmapDfir(),
      next: [
        "Learn acquisition + chain-of-custody mindset (even for home labs).",
        "Practice timeline building: logs → artifacts → narrative.",
        "Start memory basics: process trees and network connections concepts.",
        "Do 5 case-style investigations and write formal reports."
      ]
    }
  };

  // DOM
  const qTitle = document.getElementById("qTitle");
  const opts = document.getElementById("opts");
  const stepText = document.getElementById("stepText");
  const progressBar = document.getElementById("progressBar");
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");
  const resetBtn = document.getElementById("resetBtn");
  const scorecards = document.getElementById("scorecards");

  const quizCard = document.getElementById("quizCard");
  const resultCard = document.getElementById("resultCard");

  // State
  let idx = 0;
  const answers = new Array(QUESTIONS.length).fill(null);
  const counts = { A: 0, B: 0, C: 0, D: 0 };

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, m => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
    }[m]));
  }

  function render() {
    stepText.textContent = `Question ${idx + 1} of ${QUESTIONS.length}`;
    progressBar.style.width = `${Math.round((idx) / QUESTIONS.length * 100)}%`;

    qTitle.textContent = `Q${idx + 1}. ${QUESTIONS[idx].t}`;
    opts.innerHTML = "";

    const chosen = answers[idx];

    ["A", "B", "C", "D"].forEach(letter => {
      const text = QUESTIONS[idx].o[letter];
      const div = document.createElement("label");
      div.className = "opt" + (chosen === letter ? " selected" : "");
      div.innerHTML = `<input type="radio" name="opt" value="${letter}"><strong>${letter}.</strong> ${escapeHtml(text)}`;
      div.addEventListener("click", () => choose(letter));
      opts.appendChild(div);
    });

    backBtn.disabled = idx === 0;
    nextBtn.textContent = (idx === QUESTIONS.length - 1) ? "Finish" : "Next";
    nextBtn.disabled = (answers[idx] === null);

    renderScorecards();
  }

  function choose(letter) {
    const prev = answers[idx];
    if (prev) counts[prev]--;
    answers[idx] = letter;
    counts[letter]++;

    [...opts.children].forEach(el => {
      el.classList.remove("selected");
      const v = el.querySelector("input").value;
      if (v === letter) el.classList.add("selected");
    });

    nextBtn.disabled = false;
    renderScorecards();
  }

  function renderScorecards() {
    const totalAnswered = answers.filter(Boolean).length;
    const maxPossible = QUESTIONS.length;
    scorecards.innerHTML = "";

    const data = [
      { k: "A", label: "Red Team", cls: "a" },
      { k: "B", label: "Blue Team", cls: "b" },
      { k: "C", label: "Architecture/GRC", cls: "c" },
      { k: "D", label: "DFIR", cls: "d" }
    ];

    const leadingScore = Math.max(counts.A, counts.B, counts.C, counts.D);

    data.forEach(d => {
      const percent = Math.round((counts[d.k] / maxPossible) * 100);
      const highlight = (counts[d.k] === leadingScore && totalAnswered > 0);
      const card = document.createElement("div");
      card.className = "score";
      card.innerHTML = `
        <div class="top">
          <div><strong>${d.k}</strong> — ${d.label}</div>
          <div class="pill">${counts[d.k]} / ${QUESTIONS.length}</div>
        </div>
        <div class="meter"><div class="fill ${d.cls}" style="width:${percent}%"></div></div>
        <div class="mini muted" style="margin-top:8px">${highlight ? "Leading track so far" : "&nbsp;"}</div>
      `;
      scorecards.appendChild(card);
    });
  }

  function tieBreak(leaders) {
    if (leaders.length === 1) return leaders[0];

    // Extra weight to “Future You” Q17–Q20
    const weights = { A: 0, B: 0, C: 0, D: 0 };
    for (let i = 16; i < 20; i++) {
      const a = answers[i];
      if (a) weights[a] += 2;
    }
    const maxW = Math.max(...leaders.map(k => weights[k]));
    const wLeaders = leaders.filter(k => weights[k] === maxW);
    if (wLeaders.length === 1) return wLeaders[0];

    // Practical preference order for starting careers (can be changed)
    const pref = ["B", "C", "D", "A"];
    return pref.find(p => wLeaders.includes(p)) || wLeaders[0];
  }

  function showResult(key) {
    const track = TRACKS[key];

    document.getElementById("resultTitle").textContent = track.title;
    document.getElementById("resultTag").textContent =
      `${track.tag} • Score: A=${counts.A}, B=${counts.B}, C=${counts.C}, D=${counts.D}`;
    document.getElementById("resultWhy").textContent = track.why;

    const roles = document.getElementById("resultRoles");
    roles.innerHTML = "";
    track.roles.forEach(r => {
      const li = document.createElement("li");
      li.textContent = r;
      roles.appendChild(li);
    });

    document.getElementById("resultRoadmap").innerHTML = track.roadmapHtml;

    const next = document.getElementById("resultNext");
    next.innerHTML = "";
    track.next.forEach(n => {
      const li = document.createElement("li");
      li.textContent = n;
      next.appendChild(li);
    });

    quizCard.style.display = "none";
    resultCard.style.display = "block";
    progressBar.style.width = `100%`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function finish() {
    const max = Math.max(counts.A, counts.B, counts.C, counts.D);
    const leaders = Object.keys(counts).filter(k => counts[k] === max);
    const winner = tieBreak(leaders);
    showResult(winner);
  }

  function resetAll() {
    idx = 0;
    answers.fill(null);
    counts.A = counts.B = counts.C = counts.D = 0;
    quizCard.style.display = "block";
    resultCard.style.display = "none";
    render();
  }

  backBtn.addEventListener("click", () => {
    if (idx > 0) { idx--; render(); }
  });

  nextBtn.addEventListener("click", () => {
    if (idx === QUESTIONS.length - 1) return finish();
    idx++; render();
  });

  resetBtn.addEventListener("click", resetAll);

  // Boot
  render();
})();
