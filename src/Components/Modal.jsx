const Modal = ({handleLinkClick}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span class="close" onClick={handleLinkClick}>
          &times;
        </span>
        <div className="text-container">
          <div className="rule-container">
						<h4>Rules & Regulations</h4>
						<ol>
							<li>Treat all participants with respect and courtesy.</li>
							<li>
								Adhere to the scheduled time slots and ensure discussions stay on
								track.
							</li>
							<li>Conduct oneself in a professional manner at all times.</li>
							<li>
								Participants are encouraged to approach the workshop with an open
								mind, a willingness to learn, and a commitment to
								self-improvement.
							</li>
							<li>
								Disruptive behavior, including talking loudly, using electronic
								devices, or engaging in distracting activities, is strictly
								prohibited during meditation sessions.
							</li>
							<li>
								For the counseling session, each participant is allotted a
								10-minute time slot. Participants can make the most of their
								counseling sessions and receive the support they need to address
								their concerns and challenges effectively.
							</li>
							<li>
								Meditation in this workshop is presented as a secular practice
								focused on mindfulness, relaxation, and self-awareness.
								Participants should understand that meditation is not inherently
								tied to any specific religion or spiritual tradition.
							</li>
						</ol>
						<p>
							Hugh Jackman on Meditation: "If you put Buddha, Jesus Christ,
							Socrates, Shakespeare, Arjuna, Krishna at a dinner table together, I
							can't see them having an argument." Meditation is all about the
							pursuit of nothingness. It's like the ultimate rest. It's better
							than the best sleep you've ever had.
						</p>
					</div>
          <div className="contact-container">
            <p>For further inquiries, please contact:</p>
            <p>Chua Shi Shuen 011-23616930 (chuass-wk21@student.tarc.edu.my)</p>
            <p>Pung Li Ying 017-6886813 (pungly-wk22@student.tarc.edu.my）</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
