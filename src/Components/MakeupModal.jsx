const MakeupModal = ({handleLinkClick}) => {
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
              <li>
                Respectful and professional conduct is expected from all
                participants throughout the workshop. Any disruptive behavior
                may result in removal from the workshop without refund.
              </li>
              <li>
                Participants must adhere to all safety guidelines and
                instructions provided by the workshop facilitators. Failure to
                comply with safety instructions may result in removal from the
                workshop.
              </li>
              <li>
                Participants are responsible for handling workshop equipment and
                supplies with care. Any damage to equipment or supplies due to
                negligence may result in liability for replacement costs.
              </li>
              <li>
                Participants agree to maintain the confidentiality of any
                sensitive information or practices discussed during the
                workshop. Sharing of workshop content or materials to social
                media platforms is prohibited.
              </li>
              <li>
                The workshop organizers reserve the right to make changes to
                the workshop schedule, including dates, times, and content, if
                necessary. Participants will be notified of any changes in
                advance.
              </li>
            </ol>
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

export default MakeupModal;
