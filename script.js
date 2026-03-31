const medicalDatabase = {
  symptoms: {
    fever: { name: "Fever", color: "#ef4444" },
    cough: { name: "Cough", color: "#f97316" },
    headache: { name: "Headache", color: "#eab308" },
    "sore throat": { name: "Sore Throat", color: "#8b5cf6" },
    fatigue: { name: "Fatigue", color: "#06b6d4" },
    "body ache": { name: "Body Ache", color: "#f43f5e" },
    "runny nose": { name: "Runny Nose", color: "#0ea5e9" },
    "shortness of breath": { name: "Shortness of Breath", color: "#6366f1" },
    nausea: { name: "Nausea", color: "#ec4899" },
    vomiting: { name: "Vomiting", color: "#ef4444" },
    diarrhea: { name: "Diarrhea", color: "#14b8a6" },
    "stomach pain": { name: "Stomach Pain", color: "#a855f7" },
    "skin rash": { name: "Skin Rash", color: "#f43f5e" },
    itching: { name: "Itching", color: "#f59e0b" },
    weakness: { name: "Weakness", color: "#10b981" },
    dizziness: { name: "Dizziness", color: "#8b5cf6" },
    chills: { name: "Chills", color: "#06b6d4" },
    insomnia: { name: "Insomnia", color: "#6366f1" },
  },
  diagnoses: [
    {
      id: 1,
      name: "Common Cold",
      symptoms: ["runny nose", "cough", "sore throat", "headache", "fatigue"],
      precautions: [
        "Stay hydrated and rest well",
        "Use warm fluids and steam inhalation",
        "Avoid close contact to prevent spread",
        "Wash hands frequently",
      ],
      medicines: [
        {
          name: "Aspirin",
          type: "Allopathic",
          dose: "300-500mg as needed",
          duration: "3-5 days",
          sideEffects: "Stomach irritation, acidity, rare bleeding risk.",
        },
        {
          name: "Vitamin C",
          type: "Supplement",
          dose: "500mg once daily",
          duration: "7-14 days",
          sideEffects: "May cause mild stomach upset in some people.",
        },
        {
          name: "Tulsi",
          type: "Ayurvedic",
          dose: "5-10 leaves or tea twice daily",
          duration: "7 days",
          sideEffects: "Generally safe; occasional mild digestive discomfort.",
        },
        {
          name: "Arsenicum Album 30",
          type: "Homeopathic",
          dose: "3-5 globules twice daily",
          duration: "5-7 days",
          sideEffects: "No major known side effects.",
        },
      ],
    },
    {
      id: 2,
      name: "Influenza (Flu)",
      symptoms: ["fever", "cough", "body ache", "headache", "fatigue", "chills"],
      precautions: [
        "Monitor fever and stay hydrated",
        "Take adequate rest and avoid exertion",
        "Use mask to reduce transmission",
        "Consult doctor for persistent high fever",
      ],
      medicines: [
        {
          name: "Oseltamivir",
          type: "Allopathic",
          dose: "75mg twice daily",
          duration: "5 days",
          sideEffects: "Nausea, vomiting, headache.",
        },
        {
          name: "Giloy",
          type: "Ayurvedic",
          dose: "10-20ml juice once daily",
          duration: "10-15 days",
          sideEffects: "Usually safe; may lower blood sugar in some people.",
        },
        {
          name: "Bryonia 30",
          type: "Homeopathic",
          dose: "3-5 globules thrice daily",
          duration: "7 days",
          sideEffects: "No known serious side effects.",
        },
      ],
    },
    {
      id: 3,
      name: "Migraine Headache",
      symptoms: ["headache", "nausea", "dizziness", "fatigue", "insomnia"],
      precautions: [
        "Avoid known triggers (stress, irregular sleep, dehydration)",
        "Maintain proper sleep routine",
        "Reduce screen glare and noise exposure during attacks",
        "Seek medical advice for frequent attacks",
      ],
      medicines: [
        {
          name: "Sumatriptan",
          type: "Allopathic",
          dose: "50mg at onset of attack",
          duration: "As prescribed",
          sideEffects: "Tingling, dizziness, chest pressure sensation.",
        },
        {
          name: "Brahmi",
          type: "Ayurvedic",
          dose: "1-2 capsules daily",
          duration: "30 days",
          sideEffects: "Possible mild stomach discomfort.",
        },
        {
          name: "Belladonna 30",
          type: "Homeopathic",
          dose: "3-5 globules twice daily",
          duration: "10 days",
          sideEffects: "No major known side effects.",
        },
      ],
    },
    {
      id: 4,
      name: "Gastroenteritis",
      symptoms: ["stomach pain", "nausea", "vomiting", "diarrhea", "weakness"],
      precautions: [
        "Use ORS to prevent dehydration",
        "Avoid oily and spicy foods",
        "Eat light meals and rest",
        "Seek urgent care if symptoms persist beyond 2-3 days",
      ],
      medicines: [
        {
          name: "Metronidazole",
          type: "Allopathic",
          dose: "400mg thrice daily",
          duration: "5 days",
          sideEffects: "Metallic taste, nausea, abdominal discomfort.",
        },
        {
          name: "Triphala",
          type: "Ayurvedic",
          dose: "1 tsp with warm water at night",
          duration: "7-10 days",
          sideEffects: "May loosen stool if dose is high.",
        },
        {
          name: "Podophyllum 30",
          type: "Homeopathic",
          dose: "3-5 globules thrice daily",
          duration: "5 days",
          sideEffects: "No major known side effects.",
        },
      ],
    },
    {
      id: 5,
      name: "Allergic Rhinitis",
      symptoms: ["runny nose", "itching", "skin rash", "shortness of breath"],
      precautions: [
        "Avoid allergens like dust and pollen",
        "Use masks in dusty environments",
        "Keep surroundings clean and ventilated",
        "See doctor if breathing difficulty worsens",
      ],
      medicines: [
        {
          name: "Cetirizine",
          type: "Allopathic",
          dose: "10mg once daily",
          duration: "7-14 days",
          sideEffects: "Drowsiness, dry mouth.",
        },
        {
          name: "Neem",
          type: "Ayurvedic",
          dose: "1 capsule twice daily",
          duration: "21 days",
          sideEffects: "May cause mild stomach upset in sensitive users.",
        },
        {
          name: "Allium Cepa 30",
          type: "Homeopathic",
          dose: "3-5 globules twice daily",
          duration: "10 days",
          sideEffects: "No major known side effects.",
        },
      ],
    },
  ],
};

const INFERMEDICA_CONFIG = {
  appId: "",
  appKey: "",
  baseUrl: "https://api.infermedica.com/v3",
  model: "infermedica-en",
  defaultSex: "male",
  defaultAge: 30,
};

const selectedSymptoms = new Set();
let recognition = null;
let voiceSupported = false;
let selectedDiseaseFilter = "";
const infermedicaSymptomsByName = new Map();

const checker = document.getElementById("checker");
const startBtn = document.getElementById("startBtn");
const symptomInput = document.getElementById("symptomInput");
const symptomSuggestions = document.getElementById("symptomSuggestions");
const addSymptomBtn = document.getElementById("addSymptomBtn");
const voiceBtn = document.getElementById("voiceBtn");
const voiceStatus = document.getElementById("voiceStatus");
const diseaseInput = document.getElementById("diseaseInput");
const diseaseSuggestions = document.getElementById("diseaseSuggestions");
const selectDiseaseBtn = document.getElementById("selectDiseaseBtn");
const clearDiseaseBtn = document.getElementById("clearDiseaseBtn");
const diseaseStatus = document.getElementById("diseaseStatus");
const symptomsContainer = document.getElementById("selectedSymptoms");
const analyzeBtn = document.getElementById("analyzeBtn");
const resultsSection = document.getElementById("resultsSection");
const resultsContainer = document.getElementById("results");
const detailSection = document.getElementById("detailSection");
const detailTitle = document.getElementById("detailTitle");
const detailContent = document.getElementById("detailContent");
const orderSection = document.getElementById("orderSection");
const orderForm = document.getElementById("orderForm");
const orderDisease = document.getElementById("orderDisease");
const orderMedicine = document.getElementById("orderMedicine");
const customerName = document.getElementById("customerName");
const customerPhone = document.getElementById("customerPhone");
const orderQuantity = document.getElementById("orderQuantity");
const customerCity = document.getElementById("customerCity");
const customerAddress = document.getElementById("customerAddress");
const orderNotes = document.getElementById("orderNotes");
const cancelOrderBtn = document.getElementById("cancelOrderBtn");

const ORDER_WHATSAPP_NUMBER = "919414055572";

const medicineColors = {
  Allopathic: "#3b82f6",
  Ayurvedic: "#f59e0b",
  Homeopathic: "#8b5cf6",
  Supplement: "#6b7280",
  Natural: "#06b6d4",
};

function getAllDiseaseNames() {
  const localNames = medicalDatabase.diagnoses.map((d) => d.name);
  return Array.from(new Set(localNames)).sort((a, b) => a.localeCompare(b));
}

function populateSuggestionLists() {
  symptomSuggestions.innerHTML = "";
  const symptomSource = infermedicaSymptomsByName.size
    ? Array.from(infermedicaSymptomsByName.values())
    : Object.values(medicalDatabase.symptoms);

  symptomSource.forEach((symptom) => {
    const option = document.createElement("option");
    option.value = symptom.name;
    symptomSuggestions.appendChild(option);
  });

  diseaseSuggestions.innerHTML = "";
  getAllDiseaseNames().forEach((diseaseName) => {
    const option = document.createElement("option");
    option.value = diseaseName;
    diseaseSuggestions.appendChild(option);
  });
}

function normalizeSymptom(symptom) {
  return symptom.trim().toLowerCase().replace(/\s+/g, " ");
}

function renderSelectedSymptoms() {
  symptomsContainer.innerHTML = "";
  selectedSymptoms.forEach((key) => {
    const symptom =
      infermedicaSymptomsByName.get(key) ||
      medicalDatabase.symptoms[key] || { name: key, color: "#0ea5e9" };
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.style.background = symptom.color || "#0ea5e9";
    chip.innerHTML = `<span>${symptom.name}</span><button aria-label="Remove ${symptom.name}">&times;</button>`;
    chip.querySelector("button").addEventListener("click", () => {
      selectedSymptoms.delete(key);
      renderSelectedSymptoms();
    });
    symptomsContainer.appendChild(chip);
  });
}

function addSymptom(rawSymptom) {
  const key = normalizeSymptom(rawSymptom);
  const infermedicaMatch = infermedicaSymptomsByName.get(key);
  const localMatch = medicalDatabase.symptoms[key];
  if (!infermedicaMatch && !localMatch) {
    voiceStatus.textContent = "Symptom not recognized. Use one from the supported list.";
    return;
  }
  selectedSymptoms.add(key);
  symptomInput.value = "";
  voiceStatus.textContent = "";
  renderSelectedSymptoms();
}

function setDiseaseFilter(rawDisease) {
  const disease = rawDisease.trim().toLowerCase();
  if (!disease) {
    selectedDiseaseFilter = "";
    diseaseStatus.textContent = "";
    return;
  }

  const availableNames = getAllDiseaseNames();
  const exactMatch = availableNames.find((name) => name.toLowerCase() === disease);
  if (!exactMatch) {
    diseaseStatus.textContent = "Disease not found in suggestions. Pick a listed disease.";
    return;
  }

  selectedDiseaseFilter = exactMatch;
  diseaseInput.value = exactMatch;
  diseaseStatus.textContent = `Results will focus on: ${exactMatch}`;
}

function calculateMatches() {
  return medicalDatabase.diagnoses
    .map((diagnosis) => {
      const matched = diagnosis.symptoms.filter((s) => selectedSymptoms.has(s));
      const percentage = Math.round((matched.length / diagnosis.symptoms.length) * 100);
      return { ...diagnosis, matched, percentage };
    })
    .filter((d) => d.percentage > 0)
    .sort((a, b) => b.percentage - a.percentage);
}

function calculateLocalMatches() {
  return calculateMatches();
}

function hasInfermedicaCredentials() {
  return Boolean(INFERMEDICA_CONFIG.appId && INFERMEDICA_CONFIG.appKey);
}

async function infermedicaRequest(path, payload) {
  const hasBody = typeof payload !== "undefined";
  const response = await fetch(`${INFERMEDICA_CONFIG.baseUrl}${path}`, {
    method: hasBody ? "POST" : "GET",
    headers: {
      "Content-Type": "application/json",
      "App-Id": INFERMEDICA_CONFIG.appId,
      "App-Key": INFERMEDICA_CONFIG.appKey,
      "Model": INFERMEDICA_CONFIG.model,
    },
    body: hasBody ? JSON.stringify(payload) : undefined,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Infermedica API error (${response.status}): ${errorText}`);
  }

  return response.json();
}

async function loadInfermedicaSymptoms() {
  if (!hasInfermedicaCredentials()) {
    populateSuggestionLists();
    return;
  }

  try {
    voiceStatus.textContent = "Loading symptoms from Infermedica...";
    const symptoms = await infermedicaRequest("/symptoms");
    infermedicaSymptomsByName.clear();

    (symptoms || []).forEach((symptom) => {
      if (!symptom.name) return;
      infermedicaSymptomsByName.set(normalizeSymptom(symptom.name), {
        id: symptom.id,
        name: symptom.name,
        color: "#0ea5e9",
      });
    });

    populateSuggestionLists();
    voiceStatus.textContent = "Symptoms loaded from Infermedica API.";
  } catch (error) {
    populateSuggestionLists();
    voiceStatus.textContent =
      "Could not load Infermedica symptoms. Using local symptom list.";
  }
}

async function calculateInfermedicaMatches() {
  const selected = Array.from(selectedSymptoms);
  const parseText = selected.join(", ");
  const parsePayload = {
    text: parseText,
    age: { value: INFERMEDICA_CONFIG.defaultAge },
    sex: INFERMEDICA_CONFIG.defaultSex,
  };

  const parseData = await infermedicaRequest("/parse", parsePayload);
  const evidence = (parseData.mentions || []).map((mention) => ({
    id: mention.id,
    choice_id: mention.choice_id || "present",
  }));

  if (!evidence.length) {
    return [];
  }

  const diagnosisPayload = {
    sex: INFERMEDICA_CONFIG.defaultSex,
    age: { value: INFERMEDICA_CONFIG.defaultAge },
    evidence,
  };

  const diagnosisData = await infermedicaRequest("/diagnosis", diagnosisPayload);
  const conditions = diagnosisData.conditions || [];

  return conditions.map((condition, index) => {
    const matched = selected;
    const percentage = Math.round((condition.probability || 0) * 100);
    const local = medicalDatabase.diagnoses.find((d) => d.name === condition.name);
    return {
      id: local ? local.id : `infermedica-${index}`,
      externalId: condition.id,
      name: condition.name,
      percentage,
      matched,
      hasLocalDetails: Boolean(local),
    };
  });
}

async function getDiagnosisMatches() {
  if (!hasInfermedicaCredentials()) {
    voiceStatus.textContent =
      "Infermedica API credentials missing. Using local diagnosis engine.";
    return calculateLocalMatches();
  }

  try {
    voiceStatus.textContent = "Analyzing with Infermedica API...";
    const infermedicaMatches = await calculateInfermedicaMatches();
    voiceStatus.textContent = "";

    if (!infermedicaMatches.length) {
      voiceStatus.textContent = "No Infermedica conditions matched. Showing local results.";
      return calculateLocalMatches();
    }
    return infermedicaMatches.sort((a, b) => b.percentage - a.percentage);
  } catch (error) {
    voiceStatus.textContent = "Infermedica unavailable. Falling back to local diagnosis.";
    return calculateLocalMatches();
  }
}

function renderResults(results) {
  resultsContainer.innerHTML = "";
  const filteredResults = selectedDiseaseFilter
    ? results.filter((item) => item.name.toLowerCase() === selectedDiseaseFilter.toLowerCase())
    : results;
  if (!filteredResults.length) {
    resultsContainer.innerHTML =
      selectedDiseaseFilter
        ? "<p class='muted'>No match found for the selected disease with current symptoms.</p>"
        : "<p class='muted'>No likely match found. Try adding more exact symptoms.</p>";
    return;
  }

  filteredResults.forEach((item) => {
    const matchedSymptomNames = item.matched
      .map((m) => {
        if (infermedicaSymptomsByName.has(m)) return infermedicaSymptomsByName.get(m).name;
        if (medicalDatabase.symptoms[m]) return medicalDatabase.symptoms[m].name;
        return m;
      })
      .join(", ");
    const canShowDetail = Number.isInteger(item.id);
    const detailButton = canShowDetail
      ? `<button class="btn" data-id="${item.id}">View Details</button>`
      : `<button class="btn" disabled title="Detailed local medicine data not available for this API condition">No Local Details</button>`;

    const wrap = document.createElement("article");
    wrap.className = "result-item";
    wrap.innerHTML = `
      <div class="result-main">
        <h4>${item.name}</h4>
        <p class="muted">Matched symptoms: ${matchedSymptomNames || "Not available"}</p>
      </div>
      <div>
        <span class="pill" style="background:#0f766e">${item.percentage}% match</span>
        ${detailButton}
      </div>
    `;

    if (canShowDetail) {
      wrap.querySelector("button").addEventListener("click", () => {
        showDetails(item.id);
      });
    }
    resultsContainer.appendChild(wrap);
  });
}

function showDetails(id) {
  const diagnosis = medicalDatabase.diagnoses.find((d) => d.id === id);
  if (!diagnosis) return;

  detailTitle.textContent = diagnosis.name;
  const precautionsHtml = diagnosis.precautions.map((p) => `<li>${p}</li>`).join("");
  const medicineHtml = diagnosis.medicines
    .map((m) => {
      const color = medicineColors[m.type] || "#6b7280";
      return `
        <article class="medicine">
          <h4>${m.name} <span class="pill" style="background:${color}">${m.type}</span></h4>
          <p><strong>Dose:</strong> ${m.dose}</p>
          <p><strong>Duration:</strong> ${m.duration}</p>
          <p><strong>Side Effects:</strong> ${m.sideEffects}</p>
          <div class="medicine-actions">
            <button class="btn btn-buy buy-medicine-btn" data-medicine="${m.name}" data-disease="${diagnosis.name}">
              Buy on WhatsApp
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  detailContent.innerHTML = `
    <p><strong>Typical Symptoms:</strong> ${diagnosis.symptoms
      .map((s) => {
        if (infermedicaSymptomsByName.has(s)) return infermedicaSymptomsByName.get(s).name;
        if (medicalDatabase.symptoms[s]) return medicalDatabase.symptoms[s].name;
        return s;
      })
      .join(", ")}</p>
    <h3>Precautions</h3>
    <ul>${precautionsHtml}</ul>
    <h3>Medicines</h3>
    <div class="medicine-list">${medicineHtml}</div>
  `;
  detailSection.classList.remove("hidden");

  detailContent.querySelectorAll(".buy-medicine-btn").forEach((button) => {
    button.addEventListener("click", () => {
      openOrderLanding(button.dataset.medicine, button.dataset.disease);
    });
  });
}

function openOrderLanding(medicineName, diseaseName) {
  orderMedicine.value = medicineName || "";
  orderDisease.value = diseaseName || "";
  orderSection.classList.remove("hidden");
  orderSection.classList.add("in-view");
  orderSection.scrollIntoView({ behavior: "smooth" });
}

function buildWhatsAppOrderMessage() {
  return [
    "Hello, I would like to place a medicine order.",
    "",
    `Disease: ${orderDisease.value}`,
    `Medicine: ${orderMedicine.value}`,
    `Quantity: ${orderQuantity.value}`,
    "",
    "Customer Details:",
    `Name: ${customerName.value}`,
    `Phone: ${customerPhone.value}`,
    `City: ${customerCity.value}`,
    `Address: ${customerAddress.value}`,
    `Notes: ${orderNotes.value || "N/A"}`,
  ].join("\n");
}

function initVoice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    voiceStatus.textContent = "Voice recognition is not supported in this browser.";
    voiceBtn.disabled = true;
    return;
  }

  voiceSupported = true;
  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.language = "en-US";

  recognition.onstart = () => {
    voiceStatus.textContent = "Listening... please speak a symptom.";
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    symptomInput.value = transcript;
    voiceStatus.textContent = `Heard: "${transcript}". Click Add to confirm.`;
  };

  recognition.onerror = () => {
    voiceStatus.textContent = "Voice recognition failed. Try again or use text input.";
  };

  recognition.onend = () => {
    if (voiceStatus.textContent === "Listening... please speak a symptom.") {
      voiceStatus.textContent = "No speech detected. Try again.";
    }
  };
}

function initScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal-on-scroll");
  if (!("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

function initInteractiveEffects() {
  const hero = document.querySelector(".hero");
  if (hero) {
    window.addEventListener("scroll", () => {
      const y = window.scrollY * 0.2;
      hero.style.backgroundPosition = `center ${y}px`;
    });
  }

  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("pointerdown", () => {
      btn.style.transform = "translateY(1px) scale(0.99)";
    });
    btn.addEventListener("pointerup", () => {
      btn.style.transform = "";
    });
    btn.addEventListener("pointerleave", () => {
      btn.style.transform = "";
    });
  });
}

startBtn.addEventListener("click", () => {
  checker.classList.remove("hidden");
  checker.classList.add("in-view");
  checker.scrollIntoView({ behavior: "smooth" });
});

addSymptomBtn.addEventListener("click", () => addSymptom(symptomInput.value));
symptomInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addSymptom(symptomInput.value);
});
selectDiseaseBtn.addEventListener("click", () => setDiseaseFilter(diseaseInput.value));
diseaseInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") setDiseaseFilter(diseaseInput.value);
});
clearDiseaseBtn.addEventListener("click", () => {
  selectedDiseaseFilter = "";
  diseaseInput.value = "";
  diseaseStatus.textContent = "Disease filter cleared.";
});

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = buildWhatsAppOrderMessage();
  const whatsappUrl = `https://wa.me/${ORDER_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
});

cancelOrderBtn.addEventListener("click", () => {
  orderSection.classList.add("hidden");
});

voiceBtn.addEventListener("click", () => {
  if (!voiceSupported || !recognition) return;
  recognition.start();
});

analyzeBtn.addEventListener("click", async () => {
  if (!selectedSymptoms.size) {
    voiceStatus.textContent = "Add at least one symptom before analysis.";
    return;
  }
  const matches = await getDiagnosisMatches();
  renderResults(matches);
  resultsSection.classList.remove("hidden");
  detailSection.classList.add("hidden");
  resultsSection.scrollIntoView({ behavior: "smooth" });
});

loadInfermedicaSymptoms();
initVoice();
initScrollReveal();
initInteractiveEffects();
