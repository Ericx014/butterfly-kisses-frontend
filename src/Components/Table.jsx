import {useState, useEffect} from "react";
import sessionService from "../Services/sessions";
import makeupsessionService from "../Services/makeupsession";
import SingleTable from "./SingleTable";
import Navbar from "./Navbar";

const Table = ({setIsLoggedIn}) => {
  const [sessions, setSessions] = useState([]);
  const [makeupSessions, setMakeupSessions] = useState([]);
  const [meditationDays, setMeditationDays] = useState([]);
	const [makeupDays, setMakeupDays] = useState([]);
  const [view, setView] = useState("meditation");

  useEffect(() => {
    sessionService.getAll().then((allSessions) => {
      setSessions(allSessions);
      console.log("Sessions", allSessions);
    });
		makeupsessionService.getAll().then((allSessions) => {
      setMakeupSessions(allSessions);
      console.log("Make up", allSessions);
    });
  }, []);

  useEffect(() => {
    const uniqueMeditationDays = [
      ...new Set(sessions.map((singleSession) => singleSession.day)),
    ];
    setMeditationDays(uniqueMeditationDays);
		const uniqueMakeupDays = [
      ...new Set(makeupSessions.map((singleSession) => singleSession.day)),
    ];
    setMakeupDays(uniqueMakeupDays);
  }, [sessions, makeupSessions]);

  return (
    <>
      {view === "meditation" && (
        <div>
          <Navbar
            setIsLoggedIn={setIsLoggedIn}
            activityName="Meditation Session"
            setView={setView}
          />
          <div className="table-container">
            {meditationDays.map((day, index) => {
              const matchingSession = sessions.filter(
                (singleSession) => singleSession.day === day
              );

              return (
                <SingleTable
                  key={index}
                  uniqueDay={day}
                  sessionToDisplay={matchingSession}
                />
              );
            })}
          </div>
        </div>
      )}

      {view === "makeup" && (
        <div>
          <Navbar
            setIsLoggedIn={setIsLoggedIn}
            setView={setView}
            activityName="Clean Body"
          />
          <div className="table-container">
            {makeupDays.map((day, index) => {
              const matchingSession = makeupSessions.filter(
                (singleSession) => singleSession.day === day
              );
              return (
                <SingleTable
                  key={index}
                  uniqueDay={day}
                  sessionToDisplay={matchingSession}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
