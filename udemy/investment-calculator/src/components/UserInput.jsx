function UserInput({ userInput, handleUserInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) =>
              handleUserInputChange("initialInvestment", e.target.value)
            }
          />
        </p>
        <p>
          <label>Anual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) =>
              handleUserInputChange("annualInvestment", e.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) =>
              handleUserInputChange("expectedReturn", e.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => handleUserInputChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
