import React from "react";
import { Button } from "reactstrap";
import Select from "react-select";

const ExhibitorForm = ({ 
    exhibitorValues, 
    handleExhibitorChange, 
    exhibitorFormErrors, 
    isSubmit, 
    handleExhibitorSubmit, 
    setExhibitorValues, 
    isdCodes, 
    categories,
    stages,
    exhibitorTickets,
    selectedExhibitorTicket,
    handleTicketSelection 
}) => {
    return (
        <div>
            <div className="mb-3">
                <label className="f-13 fw-bold" htmlFor="contactPersonName">
                    Name<span className="text-danger">*</span>
                </label>
                <input
                    type="text"
                    name="contactPersonName"
                    className="form-control bg-light"
                    value={exhibitorValues.contactPersonName}
                    onChange={handleExhibitorChange}
                />
                {isSubmit && exhibitorFormErrors.contactPersonName && (
                    <p className="text-danger f-13">{exhibitorFormErrors.contactPersonName}</p>
                )}
            </div>

            <div className="row mb-3">
                <div className="col-md-4">
                    <label className="f-13 fw-bold" htmlFor="countryCode">
                        Country Code<span className="text-danger">*</span>
                    </label>
                    <Select
                        name="countryCode"
                        className="p-0 b-0 form-control bg-light"
                        value={exhibitorValues.countryCode}
                        onChange={(e) => {
                            setExhibitorValues({
                                ...exhibitorValues,
                                countryCode: e
                            })
                        }}
                        options={isdCodes.map((item) => ({
                            value: item.code,
                            label: `${item.country} (${item.code})`,
                        }))}
                    />
                    {isSubmit && exhibitorFormErrors.countryCode && (
                        <p className="text-danger f-13">{exhibitorFormErrors.countryCode}</p>
                    )}
                </div>
                <div className="mb-3 col-md-8">
                    <label className="f-13 fw-bold" htmlFor="contactNo">
                        Number<span className="text-danger">*</span>
                    </label>
                    <input
                        type="number"
                        name="contactNo"
                        className="form-control bg-light"
                        value={exhibitorValues.contactNo}
                        onChange={handleExhibitorChange}
                    />
                    {isSubmit && exhibitorFormErrors.contactNo && (
                        <p className="text-danger f-13">{exhibitorFormErrors.contactNo}</p>
                    )}
                </div>
            </div>

            <div className="mb-3">
                <label className="f-13 fw-bold" htmlFor="email">
                    Mail ID<span className="text-danger">*</span>
                </label>
                <input
                    type="email"
                    name="email"
                    className="form-control bg-light"
                    value={exhibitorValues.email}
                    onChange={handleExhibitorChange}
                />
                {isSubmit && exhibitorFormErrors.email && (
                    <p className="text-danger f-13">{exhibitorFormErrors.email}</p>
                )}
            </div>

            <div className="mb-3">
                <label className="f-13 fw-bold" htmlFor="companyName">
                    Startup Name<span className="text-danger">*</span>
                </label>
                <input
                    type="text"
                    name="companyName"
                    className="form-control bg-light"
                    value={exhibitorValues.companyName}
                    onChange={handleExhibitorChange}
                />
                {isSubmit && exhibitorFormErrors.companyName && (
                    <p className="text-danger f-13">{exhibitorFormErrors.companyName}</p>
                )}
            </div>

            <div className="mb-3">
                <label className="f-13 fw-bold" htmlFor="founderName">
                    Founder Name<span className="text-danger">*</span>
                </label>
                <input
                    type="text"
                    name="founderName"
                    className="form-control bg-light"
                    value={exhibitorValues.founderName}
                    onChange={handleExhibitorChange}
                />
                {isSubmit && exhibitorFormErrors.founderName && (
                    <p className="text-danger f-13">{exhibitorFormErrors.founderName}</p>
                )}
            </div>

            <div className="mb-3">
                <label className="f-13 fw-bold" htmlFor="categoryId">
                    Industry<span className="text-danger">*</span>
                </label>
                <Select
                    name="categoryId"
                    className="p-0 b-0 form-control bg-light"
                    value={exhibitorValues.categoryId}
                    onChange={(e) => {
                        setExhibitorValues({
                            ...exhibitorValues,
                            categoryId: e
                        })
                    }}
                    options={categories.map((item) => ({
                        value: item._id,
                        label: item.categoryName,
                    }))}
                />
                {isSubmit && exhibitorFormErrors.categoryId && (
                    <p className="text-danger f-13">{exhibitorFormErrors.categoryId}</p>
                )}
            </div>

            <div className="mb-3">
                <label className="f-13 fw-bold" htmlFor="stageOfStartup">
                    Stage of Startup<span className="text-danger">*</span>
                </label>
                <Select
                    name="stageOfStartup"
                    className="p-0 b-0 form-control bg-light"
                    value={exhibitorValues.stageOfStartup}
                    onChange={(e) => {
                        setExhibitorValues({
                            ...exhibitorValues,
                            stageOfStartup: e
                        })
                    }}
                    options={stages.map((item) => ({
                        value: item._id,
                        label: item.StageOfStartup,
                    }))}
                />
                {isSubmit && exhibitorFormErrors.stageOfStartup && (
                    <p className="text-danger f-13">{exhibitorFormErrors.stageOfStartup}</p>
                )}
            </div>

            <div className="mb-3">
                <label className="f-13 fw-bold">
                    Select Ticket Type<span className="text-danger">*</span>
                </label>
                <div className="mt-2">
                    {exhibitorTickets && exhibitorTickets.map((ticket) => (
                        <div key={ticket._id} className="form-check mb-3 p-3 border rounded">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="ticketType"
                                id={`ticket-${ticket._id}`}
                                value={ticket._id}
                                checked={selectedExhibitorTicket === ticket._id}
                                onChange={() => handleTicketSelection(ticket._id)}
                            />
                            <label className="form-check-label w-100" htmlFor={`ticket-${ticket._id}`}>
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="flex-grow-1">
                                        <h6 className="mb-1 fw-bold">{ticket.name}</h6>
                                        <p className="mb-2 text-muted small">{ticket.remarks}</p>
                                        <small className="text-info">
                                            Valid from: {new Date(ticket.startDate).toLocaleDateString()} to {new Date(ticket.endDate).toLocaleDateString()}
                                        </small>
                                    </div>
                                    <div className="text-end">
                                        <span className="h5 fw-bold text-success">₹{ticket.amount}</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    ))}
                </div>
                {isSubmit && exhibitorFormErrors.ticketType && (
                    <p className="text-danger f-13">{exhibitorFormErrors.ticketType}</p>
                )}
            </div>

            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    name="terms"
                    className="form-check-input"
                    checked={exhibitorValues.terms}
                    onChange={handleExhibitorChange}
                />
                <label className="f-13 fw-bold form-check-label" htmlFor="terms">
                    I agree to the Terms & Conditions<span className="text-danger">*</span>
                </label>
                {isSubmit && exhibitorFormErrors.terms && (
                    <p className="text-danger f-13">{exhibitorFormErrors.terms}</p>
                )}
            </div>

            <div>
                <Button type="button" color="primary" className="mt-3 register-btn" onClick={handleExhibitorSubmit}>
                    Register as Exhibitor
                </Button>
            </div>
        </div>
    );
};

export default ExhibitorForm;