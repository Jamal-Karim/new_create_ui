"use client";

import { useState } from "react";
import Custom_Alert from "./Custom_Alert";
import { useEffect } from "react";

const Waitlist = () => {
  let [error, setError] = useState(null);
  let [successMessage, setSuccessMessage] = useState(null);

  // Analytics waitlist button click
  useEffect(() => {
    function handleClick(event) {
      console.log(event);
      if (
        event.target.tagName === "BUTTON" &&
        event.target.textContent === "Submit" &&
        typeof window !== "undefined" &&
        (window as any).gtag
      ) {
        (window as any).gtag("event", "waitlist_submit_button_click", {
          link_text: event.target.innerText,
          link_id: event.target.id,
        });
      } else if (
        event.target.tagName === "INPUT" &&
        typeof window !== "undefined" &&
        (window as any).gtag
      ) {
        (window as any).gtag("event", "waitlist_text_input_click", {
          link_text: event.target.innerText,
          link_id: event.target.id,
        });
      }
    }
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  async function handleJoinNow() {
    const email = (document.getElementById("emailInput") as HTMLInputElement)
      .value;

    // Check if the email is empty
    if (!email.trim()) {
      setError("Email cannot be empty."); // Set the error message
      return; // Stop further processing
    }

    // Replace 'https://artist-hub-405321.uc.r.appspot.com/join_waitlist' with the actual endpoint of your Flask function
    const flaskEndpoint =
      "https://artist-hub-405321.uc.r.appspot.com/join_waitlist";

    try {
      // Send a POST request to Flask server using fetch
      const response = await fetch(flaskEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Handle the response as needed
        const responseData = await response.json();

        console.log("Response from Flask:", responseData);
        console.log(response);

        // Clear the error state
        setError(null);

        // Set the success message in state to trigger the display of Custom_Alert
        setSuccessMessage("You Have Joined the Waitlist!");
      } else {
        const errorData = await response.json();
        console.error("Error sending request to Flask:", errorData.error);

        // Set the error in state to trigger the display of Custom_Alert
        setError(errorData.error);

        // Clear the success message state
        setSuccessMessage(null);
      }
    } catch (error) {
      console.error("Error sending request to Flask:", error);

      // Set the error in state to trigger the display of Custom_Alert
      setError("An error occurred while processing your request.");

      // Clear the success message state
      setSuccessMessage(null);
    }
  }

  return (
    <div className="bg-[#242424] w-5/12 p-6 rounded-md py-9">
      <h3 className="text-white font-bold mb-2 text-xl">Join the Waitlist</h3>
      <p className="text-white mb-3">
        Be the first to experience the future of music creation.
      </p>
      <div>
        <input
          id="emailInput"
          className="p-1 mr-3 pr-12 rounded"
          type="text"
          placeholder="Enter your email"
        />
        <button
          onClick={handleJoinNow}
          className="p-1 px-10 text-white bg-purpleBtn rounded"
        >
          Submit
        </button>

        {/* Display Custom_Alert for success or error */}
        {successMessage && (
          <Custom_Alert severity="success">{successMessage}</Custom_Alert>
        )}

        {error && <Custom_Alert severity="error">{error}</Custom_Alert>}
      </div>
    </div>
  );
};

export default Waitlist;
