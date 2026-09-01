import "./style.css";

const app = document.querySelector("#app");

let currentStep = 0;

const formData = {
  personal: {},
  employment: {},
  loan: {},
  additional: {}
};

const steps = [
  "Personal Information",
  "Employment & Income",
  "Loan Details",
  "Additional Information",
  "Review & Submit"
];

function render() {
  app.innerHTML = `
    <div class="page">

      <div class="container">

        <header class="header">
          <div class="logo">
            <div class="logo-icon">₹</div>
            <div>
              <h1>Loan Application</h1>
              <p>Simple. Fast. Secure.</p>
            </div>
          </div>
        </header>

        ${currentStep < 5 ? progressBar() : ""}

        <main class="card">
          ${getStepContent()}
        </main>

        <footer>
          <p>© 2026 Loan Application. All rights reserved.</p>
        </footer>

      </div>

    </div>
  `;

  attachEvents();
}

function progressBar() {
  return `
    <div class="progress-wrapper">

      ${steps.map((step, index) => `
        <div class="progress-item ${index <= currentStep ? "active" : ""}">

          <div class="step-circle">
            ${index < currentStep ? "✓" : index + 1}
          </div>

          <span>${step}</span>

        </div>

        ${index < steps.length - 1
          ? `<div class="progress-line ${index < currentStep ? "active" : ""}"></div>`
          : ""
        }
      `).join("")}

    </div>
  `;
}

function getStepContent() {

  switch (currentStep) {

    case 0:
      return personalStep();

    case 1:
      return employmentStep();

    case 2:
      return loanStep();

    case 3:
      return additionalStep();

    case 4:
      return reviewStep();

    case 5:
      return successStep();

    default:
      return personalStep();
  }
}


/* ================================
   STEP 1
================================ */

function personalStep() {
  const d = formData.personal;

  return `
    <div class="step-header">
      <h2>Personal Information</h2>
      <p>Please provide your basic personal details.</p>
    </div>

    <form id="personalForm">

      <div class="form-grid">

        <div class="field">
          <label>First Name <span>*</span></label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value="${d.firstName || ""}"
            required
          />
        </div>

        <div class="field">
          <label>Last Name <span>*</span></label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value="${d.lastName || ""}"
            required
          />
        </div>

        <div class="field">
          <label>Email Address <span>*</span></label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value="${d.email || ""}"
            required
          />
        </div>

        <div class="field">
          <label>Phone Number <span>*</span></label>
          <input
            type="tel"
            name="phone"
            placeholder="10 digit mobile number"
            maxlength="10"
            value="${d.phone || ""}"
            required
          />
        </div>

        <div class="field">
          <label>Date of Birth <span>*</span></label>
          <input
            type="date"
            name="dob"
            value="${d.dob || ""}"
            required
          />
        </div>

        <div class="field">
          <label>Pincode <span>*</span></label>
          <input
            type="text"
            name="pincode"
            placeholder="6 digit pincode"
            maxlength="6"
            value="${d.pincode || ""}"
            required
          />
        </div>

      </div>

      <div class="field full">
        <label>Address <span>*</span></label>
        <input
          type="text"
          name="address"
          placeholder="Enter your complete address"
          value="${d.address || ""}"
          required
        />
      </div>

      <div class="form-grid">

        <div class="field">
          <label>City <span>*</span></label>
          <input
            type="text"
            name="city"
            placeholder="Enter city"
            value="${d.city || ""}"
            required
          />
        </div>

        <div class="field">
          <label>State <span>*</span></label>
          <select name="state" required>
            <option value="">Select state</option>
            ${[
              "Andhra Pradesh",
              "Telangana",
              "Karnataka",
              "Tamil Nadu",
              "Kerala",
              "Maharashtra",
              "Delhi",
              "Gujarat",
              "Rajasthan",
              "West Bengal",
              "Other"
            ].map(state =>
              `<option ${d.state === state ? "selected" : ""}>${state}</option>`
            ).join("")}
          </select>
        </div>

      </div>

      <div class="buttons">
        <button type="button" class="btn secondary" id="homeBtn">
          ← Back
        </button>

        <button type="submit" class="btn primary">
          Save & Continue →
        </button>
      </div>

    </form>
  `;
}


/* ================================
   STEP 2
================================ */

function employmentStep() {
  const d = formData.employment;

  return `
    <div class="step-header">
      <h2>Employment & Income</h2>
      <p>Tell us about your employment and income.</p>
    </div>

    <form id="employmentForm">

      <div class="form-grid">

        <div class="field">
          <label>Employment Status <span>*</span></label>

          <select name="employmentStatus" required>
            <option value="">Select status</option>
            <option ${d.employmentStatus === "Student" ? "selected" : ""}>
              Student
            </option>
            <option ${d.employmentStatus === "Employed" ? "selected" : ""}>
              Employed
            </option>
            <option ${d.employmentStatus === "Self Employed" ? "selected" : ""}>
              Self Employed
            </option>
            <option ${d.employmentStatus === "Business Owner" ? "selected" : ""}>
              Business Owner
            </option>
          </select>
        </div>

        <div class="field">
          <label>Employer / Company Name <span>*</span></label>

          <input
            type="text"
            name="company"
            placeholder="Company name"
            value="${d.company || ""}"
            required
          />
        </div>

        <div class="field">
          <label>Job Title <span>*</span></label>

          <input
            type="text"
            name="jobTitle"
            placeholder="Your job title"
            value="${d.jobTitle || ""}"
            required
          />
        </div>

        <div class="field">
          <label>Years Employed <span>*</span></label>

          <input
            type="number"
            name="yearsEmployed"
            min="0"
            max="50"
            placeholder="Years"
            value="${d.yearsEmployed || ""}"
            required
          />
        </div>

        <div class="field">
          <label>Monthly Income (₹) <span>*</span></label>

          <input
            type="number"
            name="monthlyIncome"
            min="0"
            placeholder="Monthly income"
            value="${d.monthlyIncome || ""}"
            required
          />
        </div>

        <div class="field">
          <label>Other Monthly Income (₹)</label>

          <input
            type="number"
            name="otherIncome"
            min="0"
            placeholder="Other income"
            value="${d.otherIncome || ""}"
          />
        </div>

        <div class="field">
          <label>Monthly Expenses (₹) <span>*</span></label>

          <input
            type="number"
            name="expenses"
            min="0"
            placeholder="Monthly expenses"
            value="${d.expenses || ""}"
            required
          />
        </div>

      </div>

      <div class="buttons">

        <button type="button" class="btn secondary" id="backBtn">
          ← Back
        </button>

        <button type="submit" class="btn primary">
          Save & Continue →
        </button>

      </div>

    </form>
  `;
}


/* ================================
   STEP 3
================================ */

function loanStep() {
  const d = formData.loan;

  return `
    <div class="step-header">
      <h2>Loan Details</h2>
      <p>Tell us how much you need and what the loan is for.</p>
    </div>

    <form id="loanForm">

      <div class="form-grid">

        <div class="field">
          <label>Loan Type <span>*</span></label>

          <select name="loanType" required>
            <option value="">Select loan type</option>

            <option ${d.loanType === "Personal Loan" ? "selected" : ""}>
              Personal Loan
            </option>

            <option ${d.loanType === "Home Loan" ? "selected" : ""}>
              Home Loan
            </option>

            <option ${d.loanType === "Education Loan" ? "selected" : ""}>
              Education Loan
            </option>

            <option ${d.loanType === "Vehicle Loan" ? "selected" : ""}>
              Vehicle Loan
            </option>

            <option ${d.loanType === "Business Loan" ? "selected" : ""}>
              Business Loan
            </option>
          </select>
        </div>

        <div class="field">
          <label>Loan Amount (₹) <span>*</span></label>

          <input
            type="number"
            name="loanAmount"
            min="10000"
            placeholder="Enter amount"
            value="${d.loanAmount || ""}"
            required
          />
        </div>

        <div class="field">
          <label>Loan Tenure <span>*</span></label>

          <select name="tenure" required>
            <option value="">Select tenure</option>

            <option value="1 Year" ${d.tenure === "1 Year" ? "selected" : ""}>
              1 Year
            </option>

            <option value="2 Years" ${d.tenure === "2 Years" ? "selected" : ""}>
              2 Years
            </option>

            <option value="3 Years" ${d.tenure === "3 Years" ? "selected" : ""}>
              3 Years
            </option>

            <option value="5 Years" ${d.tenure === "5 Years" ? "selected" : ""}>
              5 Years
            </option>

            <option value="7 Years" ${d.tenure === "7 Years" ? "selected" : ""}>
              7 Years
            </option>

            <option value="10 Years" ${d.tenure === "10 Years" ? "selected" : ""}>
              10 Years
            </option>
          </select>
        </div>

        <div class="field">
          <label>Purpose of Loan <span>*</span></label>

          <select name="purpose" required>

            <option value="">Select purpose</option>

            <option ${d.purpose === "Education" ? "selected" : ""}>
              Education
            </option>

            <option ${d.purpose === "Home Renovation" ? "selected" : ""}>
              Home Renovation
            </option>

            <option ${d.purpose === "Medical Expenses" ? "selected" : ""}>
              Medical Expenses
            </option>

            <option ${d.purpose === "Vehicle Purchase" ? "selected" : ""}>
              Vehicle Purchase
            </option>

            <option ${d.purpose === "Business" ? "selected" : ""}>
              Business
            </option>

            <option ${d.purpose === "Personal Expenses" ? "selected" : ""}>
              Personal Expenses
            </option>

            <option ${d.purpose === "Other" ? "selected" : ""}>
              Other
            </option>

          </select>
        </div>

      </div>

      <div class="loan-info">

        <div>
          <strong>Estimated Interest Rate</strong>
          <span>10.5% per year</span>
        </div>

        <div>
          <strong>Processing Fee</strong>
          <span>Up to 2% of loan amount</span>
        </div>

      </div>

      <div class="buttons">

        <button type="button" class="btn secondary" id="backBtn">
          ← Back
        </button>

        <button type="submit" class="btn primary">
          Save & Continue →
        </button>

      </div>

    </form>
  `;
}


/* ================================
   STEP 4
================================ */

function additionalStep() {
  const d = formData.additional;

  return `
    <div class="step-header">
      <h2>Additional Information</h2>
      <p>Please provide a few additional details.</p>
    </div>

    <form id="additionalForm">

      <div class="form-grid">

        <div class="field">
          <label>PAN Number <span>*</span></label>

          <input
            type="text"
            name="pan"
            maxlength="10"
            placeholder="ABCDE1234F"
            value="${d.pan || ""}"
            required
          />
        </div>

        <div class="field">
          <label>Existing Loan?</label>

          <select name="existingLoan">
            <option value="">Select</option>

            <option ${d.existingLoan === "Yes" ? "selected" : ""}>
              Yes
            </option>

            <option ${d.existingLoan === "No" ? "selected" : ""}>
              No
            </option>

          </select>
        </div>

        <div class="field">
          <label>Monthly EMI (₹)</label>

          <input
            type="number"
            name="emi"
            min="0"
            placeholder="Current EMI"
            value="${d.emi || ""}"
          />
        </div>

        <div class="field">
          <label>Preferred Contact</label>

          <select name="contact">
            <option value="">Select</option>

            <option ${d.contact === "Phone" ? "selected" : ""}>
              Phone
            </option>

            <option ${d.contact === "Email" ? "selected" : ""}>
              Email
            </option>

          </select>
        </div>

      </div>

      <div class="field full">

        <label>Additional Comments</label>

        <textarea
          name="comments"
          rows="5"
          placeholder="Anything else you would like us to know?"
        >${d.comments || ""}</textarea>

      </div>

      <div class="checkbox">

        <input
          type="checkbox"
          name="consent"
          id="consent"
          ${d.consent ? "checked" : ""}
          required
        />

        <label for="consent">
          I confirm that the information provided by me is correct and
          I agree to the terms and conditions.
        </label>

      </div>

      <div class="buttons">

        <button type="button" class="btn secondary" id="backBtn">
          ← Back
        </button>

        <button type="submit" class="btn primary">
          Review Application →
        </button>

      </div>

    </form>
  `;
}


/* ================================
   STEP 5
================================ */

function reviewStep() {

  return `
    <div class="step-header">
      <h2>Review Your Application</h2>
      <p>Please check your information before submitting.</p>
    </div>

    <div class="review-section">

      <div class="review-header">
        <h3>Personal Information</h3>
        <button class="edit-btn" data-step="0">Edit</button>
      </div>

      <div class="review-grid">

        <div>
          <small>Name</small>
          <strong>
            ${formData.personal.firstName || ""} 
            ${formData.personal.lastName || ""}
          </strong>
        </div>

        <div>
          <small>Email</small>
          <strong>${formData.personal.email || "-"}</strong>
        </div>

        <div>
          <small>Phone</small>
          <strong>${formData.personal.phone || "-"}</strong>
        </div>

        <div>
          <small>Date of Birth</small>
          <strong>${formData.personal.dob || "-"}</strong>
        </div>

        <div>
          <small>Address</small>
          <strong>${formData.personal.address || "-"}</strong>
        </div>

        <div>
          <small>City / State</small>
          <strong>
            ${formData.personal.city || "-"},
            ${formData.personal.state || "-"}
          </strong>
        </div>

      </div>

    </div>


    <div class="review-section">

      <div class="review-header">
        <h3>Employment & Income</h3>
        <button class="edit-btn" data-step="1">Edit</button>
      </div>

      <div class="review-grid">

        <div>
          <small>Status</small>
          <strong>${formData.employment.employmentStatus || "-"}</strong>
        </div>

        <div>
          <small>Company</small>
          <strong>${formData.employment.company || "-"}</strong>
        </div>

        <div>
          <small>Job Title</small>
          <strong>${formData.employment.jobTitle || "-"}</strong>
        </div>

        <div>
          <small>Monthly Income</small>
          <strong>₹${formData.employment.monthlyIncome || "0"}</strong>
        </div>

        <div>
          <small>Other Income</small>
          <strong>₹${formData.employment.otherIncome || "0"}</strong>
        </div>

        <div>
          <small>Monthly Expenses</small>
          <strong>₹${formData.employment.expenses || "0"}</strong>
        </div>

      </div>

    </div>


    <div class="review-section">

      <div class="review-header">
        <h3>Loan Details</h3>
        <button class="edit-btn" data-step="2">Edit</button>
      </div>

      <div class="review-grid">

        <div>
          <small>Loan Type</small>
          <strong>${formData.loan.loanType || "-"}</strong>
        </div>

        <div>
          <small>Loan Amount</small>
          <strong>₹${formData.loan.loanAmount || "0"}</strong>
        </div>

        <div>
          <small>Tenure</small>
          <strong>${formData.loan.tenure || "-"}</strong>
        </div>

        <div>
          <small>Purpose</small>
          <strong>${formData.loan.purpose || "-"}</strong>
        </div>

      </div>

    </div>


    <div class="review-section">

      <div class="review-header">
        <h3>Additional Information</h3>
        <button class="edit-btn" data-step="3">Edit</button>
      </div>

      <div class="review-grid">

        <div>
          <small>PAN</small>
          <strong>${formData.additional.pan || "-"}</strong>
        </div>

        <div>
          <small>Existing Loan</small>
          <strong>${formData.additional.existingLoan || "-"}</strong>
        </div>

        <div>
          <small>Monthly EMI</small>
          <strong>₹${formData.additional.emi || "0"}</strong>
        </div>

        <div>
          <small>Preferred Contact</small>
          <strong>${formData.additional.contact || "-"}</strong>
        </div>

      </div>

    </div>


    <div class="buttons">

      <button type="button" class="btn secondary" id="backBtn">
        ← Back
      </button>

      <button type="button" class="btn primary" id="submitBtn">
        Submit Application ✓
      </button>

    </div>
  `;
}


/* ================================
   SUCCESS
================================ */

function successStep() {

  const applicationId =
    "LOAN-" +
    Math.floor(100000 + Math.random() * 900000);

  return `
    <div class="success">

      <div class="success-icon">
        ✓
      </div>

      <h2>Application Submitted!</h2>

      <p>
        Thank you for submitting your loan application.
        Your application has been successfully received.
      </p>

      <div class="application-number">

        <span>Application ID</span>

        <strong>${applicationId}</strong>

      </div>

      <div class="success-info">

        <p>
          Our team will review your application and contact you
          using the information provided.
        </p>

      </div>

      <button
        type="button"
        class="btn primary"
        id="newApplicationBtn"
      >
        Start New Application
      </button>

    </div>
  `;
}


/* ================================
   EVENTS
================================ */

function attachEvents() {

  const personalForm =
    document.querySelector("#personalForm");

  if (personalForm) {

    personalForm.addEventListener("submit", function (event) {

      event.preventDefault();

      if (!personalForm.checkValidity()) {
        personalForm.reportValidity();
        return;
      }

      const data = new FormData(personalForm);

      formData.personal = Object.fromEntries(data.entries());

      currentStep = 1;

      render();
    });
  }


  const employmentForm =
    document.querySelector("#employmentForm");

  if (employmentForm) {

    employmentForm.addEventListener("submit", function (event) {

      event.preventDefault();

      if (!employmentForm.checkValidity()) {
        employmentForm.reportValidity();
        return;
      }

      const data = new FormData(employmentForm);

      formData.employment =
        Object.fromEntries(data.entries());

      currentStep = 2;

      render();
    });
  }


  const loanForm =
    document.querySelector("#loanForm");

  if (loanForm) {

    loanForm.addEventListener("submit", function (event) {

      event.preventDefault();

      if (!loanForm.checkValidity()) {
        loanForm.reportValidity();
        return;
      }

      const data = new FormData(loanForm);

      formData.loan =
        Object.fromEntries(data.entries());

      currentStep = 3;

      render();
    });
  }


  const additionalForm =
    document.querySelector("#additionalForm");

  if (additionalForm) {

    additionalForm.addEventListener("submit", function (event) {

      event.preventDefault();

      if (!additionalForm.checkValidity()) {
        additionalForm.reportValidity();
        return;
      }

      const pan = additionalForm
        .querySelector('[name="pan"]')
        .value
        .toUpperCase();

      const panPattern =
        /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

      if (!panPattern.test(pan)) {

        alert(
          "Please enter a valid PAN number.\nExample: ABCDE1234F"
        );

        return;
      }

      const data = new FormData(additionalForm);

      formData.additional =
        Object.fromEntries(data.entries());

      formData.additional.pan = pan;

      currentStep = 4;

      render();
    });
  }


  const backBtn =
    document.querySelector("#backBtn");

  if (backBtn) {

    backBtn.addEventListener("click", function () {

      if (currentStep > 0) {

        currentStep--;

        render();
      }

    });
  }


  const homeBtn =
    document.querySelector("#homeBtn");

  if (homeBtn) {

    homeBtn.addEventListener("click", function () {

      if (
        confirm(
          "Are you sure you want to go back?"
        )
      ) {

        currentStep = 0;

        render();
      }

    });
  }


  const submitBtn =
    document.querySelector("#submitBtn");

  if (submitBtn) {

    submitBtn.addEventListener("click", function () {

      if (
        confirm(
          "Are you sure you want to submit your loan application?"
        )
      ) {

        currentStep = 5;

        render();
      }

    });
  }


  document
    .querySelectorAll(".edit-btn")
    .forEach(button => {

      button.addEventListener("click", function () {

        currentStep =
          Number(button.dataset.step);

        render();

      });

    });


  const newApplicationBtn =
    document.querySelector("#newApplicationBtn");

  if (newApplicationBtn) {

    newApplicationBtn.addEventListener(
      "click",
      function () {

        formData.personal = {};
        formData.employment = {};
        formData.loan = {};
        formData.additional = {};

        currentStep = 0;

        render();

      }
    );
  }

}


/* ================================
   START APPLICATION
================================ */

render();