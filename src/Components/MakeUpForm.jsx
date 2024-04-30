import {useState, useEffect} from "react";
import makeupsessionService from "../Services/makeupsession";
import makeupparticipantService from "../Services/makeupparticipants";
import MakeupModal from "./MakeupModal";

const makeUpForm = () => {
  const [clickedAnimation, setClickedAnimation] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [checkBoxTicked, setCheckBoxTicked] = useState(false);

  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [day, setDay] = useState("");
  const [session, setSession] = useState("");
  const [makeupsessions, setMakeupsessions] = useState([]);

  useEffect(() => {
    makeupsessionService.getAll().then((allSessions) => {
      setMakeupsessions(allSessions);
      console.log("Makeup Sessions", allSessions);
    });
  }, []);

  const uniqueDays = [
    ...new Set(makeupsessions.map((singleSession) => singleSession.day)),
  ];

  const addParticipant = (event) => {
    event.preventDefault();
    setClickedAnimation(true);
    setTimeout(() => setClickedAnimation(false), 2000);

    if (!name && !contactNo && !email && !gender && !age && !day && !session) {
      alert("Please fill all required the fields.");
      return;
    }

    if (!name) {
      alert("Name field is required");
      return;
    } else if (!contactNo) {
      alert("Contact number is required");
      return;
    } else if (!email) {
      alert("Email address is required");
      return;
    } else if (!gender) {
      alert("Gender field is required");
      return;
    } else if (!age) {
      alert("Age field is required");
      return;
    } else if (!day) {
      alert("Please select a day");
      return;
    } else if (!session) {
      alert("Please select a session");
      return;
    } else if (!checkBoxTicked) {
      alert("Please agree to the terms and conditions before submitting.");
      return;
    } else {
      const selectedSession = makeupsessions.find((s) => s.id === session);
      if (
        selectedSession.participants.length >= selectedSession.maxParticipants
      ) {
        alert("This session is full. Please select a different session.");
        return;
      }
      const participantObject = {
        name: name,
        studentId: studentId,
        contactNo: contactNo,
        email: email,
        gender: gender,
        age: age,
        day: day,
        session: session,
      };
      makeupparticipantService.create(participantObject).then(() => {
        makeupsessionService.getAll().then((allSessions) => {
          setMakeupsessions(allSessions);
        });

        console.log("Session found", selectedSession.maxParticipants);
        console.log(
          "Participants:",
          selectedSession.participants.length + 1,
          "out of",
          selectedSession.maxParticipants
        );
        console.log("Add participant", participantObject);

        alert(
          `Registration successful. Please take a SCREENSHOT of the following details as proof of registration:\nName: ${participantObject.name}\nGender: ${participantObject.gender}\nEmail: ${participantObject.email}\nDay: ${participantObject.day}\nSession: ${selectedSession.session}`
        );

        setName("");
        setStudentId("");
        setContactNo("");
        setEmail("");
        setGender("");
        setAge("");
        setDay("");
        setSession("");
      });
    }
  };

  const handleLinkClick = (event) => {
    event.preventDefault();
    setModalVisible(!modalVisible);
  };

  return (
    <>
      {modalVisible && <MakeupModal handleLinkClick={handleLinkClick} />}

      <form onSubmit={addParticipant}>
        <div className="container">
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ali bin Abu"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="name">
              Student ID No. (TAR UMT Students) / Personal IC No. (Public)
            </label>
            <input
              type="text"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="TAR UMT students only"
            />
          </div>
          <div className="input-container">
            <label htmlFor="contactNumber">Contact no.</label>
            <input
              type="text"
              id="contactNumber"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              placeholder="01144598329"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alibinabu@gmail.com"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" className="placeholder">
                Select an option
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="21"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="day">Day</label>
            <select
              name="day"
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            >
              <option value="" className="placeholder">
                Select an option
              </option>
              {uniqueDays.map((day) => {
                return (
                  <option key={day} value={day}>
                    {day}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="session">Session</label>
            <select
              name="session"
              id="session"
              value={session}
              onChange={(e) => setSession(e.target.value)}
            >
              <option value="" className="placeholder">
                {!day
                  ? "Please select a day to view sessions"
                  : "Select an option"}
              </option>
              {makeupsessions.map(
                (singleSession) =>
                  singleSession.day == day && (
                    <option key={singleSession.id} value={singleSession.id}>
                      {singleSession.time} {singleSession.session}
                    </option>
                  )
              )}
            </select>
          </div>
          <div>
            <input
              type="checkbox"
              id="tnc"
              name="tnc"
              onChange={(e) => setCheckBoxTicked(e.target.checked)}
            />
            <label htmlFor="tnc">
              {" "}
              I have read and agreed to the{" "}
              <a className="link" onClick={handleLinkClick}>
                terms and condition
              </a>
            </label>
          </div>
          <div className="button-container">
            <button
              className={
                clickedAnimation ? "form-btn button-bounce" : "form-btn"
              }
              type="submit"
              onClick={addParticipant}
              value="Submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default makeUpForm;
