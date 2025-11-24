import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ContactSuccessModal = ({ show, onHide }) => {
  return (
    <Modal 
      show={show} 
      onHide={onHide}
      centered
      size="md"
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="text-success fw-bold">
          <i className="fas fa-check-circle me-2"></i>
          Success!
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="text-center py-4">
        <div className="success-icon mb-3">
          <div className="success-circle">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="30" fill="#28a745"/>
              <path 
                d="M18 30L26 38L42 22" 
                stroke="white" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        
        <h4 className="text-dark fw-bold mb-3">Message Sent Successfully!</h4>
        <p className="text-muted mb-4">
          Thank you for contacting us! We have received your message and will get back to you within 24-48 hours.
        </p>
        
        <div className="contact-info bg-light p-3 rounded mb-4">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
            <i className="fas fa-envelope text-primary"></i>
            <small className="text-muted">Check your email for confirmation</small>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <i className="fas fa-phone text-primary"></i>
            <small className="text-muted">Or call us for urgent matters</small>
          </div>
        </div>
      </Modal.Body>
      
      <Modal.Footer className="border-0 justify-content-center">
        <Button variant="success" onClick={onHide} className="px-4">
          Close
        </Button>
      </Modal.Footer>

      <style>{`
        .success-circle {
          display: inline-block;
          animation: successPop 0.6s ease-out;
        }

        @keyframes successPop {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .modal-content {
          border: none;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .contact-info {
          background: #f8f9fa !important;
        }
      `}</style>
    </Modal>
  );
};

export default ContactSuccessModal;