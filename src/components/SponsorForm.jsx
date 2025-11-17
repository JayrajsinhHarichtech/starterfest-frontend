import React from "react";
import { Button } from "reactstrap";
import Select from "react-select";

const SponsorForm = ({ 
    sponsorValues, 
    handleSponsorChange, 
    sponsorFormErrors, 
    isSubmit, 
    handleSponsorSubmit, 
    setSponsorValues, 
    isdCodes, 
    categories 
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
                    value={sponsorValues.contactPersonName}
                    onChange={handleSponsorChange}
                />
                {isSubmit && sponsorFormErrors.contactPersonName && (
                    <p className="text-danger f-13">{sponsorFormErrors.contactPersonName}</p>
                )}
            </div>

            <div className="mb-3">
                <label className="f-13 fw-bold" htmlFor="email">
                    Email<span className="text-danger">*</span>
                </label>
                <input
                    type="email"
                    name="email"
                    className="form-control bg-light"
                    value={sponsorValues.email}
                    onChange={handleSponsorChange}
                />
                {isSubmit && sponsorFormErrors.email && (
                    <p className="text-danger f-13">{sponsorFormErrors.email}</p>
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
                        value={sponsorValues.countryCode}
                        onChange={(e) => {
                            setSponsorValues({
                                ...sponsorValues,
                                countryCode: e
                            })
                        }}
                        options={isdCodes.map((item) => ({
                            value: item.code,
                            label: `${item.country} (${item.code})`,
                        }))}
                    />
                    {isSubmit && sponsorFormErrors.countryCode && (
                        <p className="text-danger f-13">{sponsorFormErrors.countryCode}</p>
                    )}
                </div>
                <div className="mb-3 col-md-8">
                    <label className="f-13 fw-bold" htmlFor="contactNo">
                        Contact Number<span className="text-danger">*</span>
                    </label>
                    <input
                        type="number"
                        name="contactNo"
                        className="form-control bg-light"
                        value={sponsorValues.contactNo}
                        onChange={handleSponsorChange}
                    />
                    {isSubmit && sponsorFormErrors.contactNo && (
                        <p className="text-danger f-13">{sponsorFormErrors.contactNo}</p>
                    )}
                </div>
            </div>

            <div className="mb-3">
                <label className="f-13 fw-bold" htmlFor="companyName">
                    Company Name<span className="text-danger">*</span>
                </label>
                <input
                    type="text"
                    name="companyName"
                    className="form-control bg-light"
                    value={sponsorValues.companyName}
                    onChange={handleSponsorChange}
                />
                {isSubmit && sponsorFormErrors.companyName && (
                    <p className="text-danger f-13">{sponsorFormErrors.companyName}</p>
                )}
            </div>

            <div className="mb-3">
                <label className="f-13 fw-bold" htmlFor="categoryId">
                    Industry<span className="text-danger">*</span>
                </label>
                <Select
                    name="categoryId"
                    className="p-0 b-0 form-control bg-light"
                    value={sponsorValues.categoryId}
                    onChange={(e) => {
                        setSponsorValues({
                            ...sponsorValues,
                            categoryId: e
                        })
                    }}
                    options={categories.map((item) => ({
                        value: item._id,
                        label: item.categoryName,
                    }))}
                />
                {isSubmit && sponsorFormErrors.categoryId && (
                    <p className="text-danger f-13">{sponsorFormErrors.categoryId}</p>
                )}
            </div>

            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    name="terms"
                    className="form-check-input"
                    checked={sponsorValues.terms}
                    onChange={handleSponsorChange}
                />
                <label className="f-13 fw-bold form-check-label" htmlFor="terms">
                    I agree to the Terms & Conditions<span className="text-danger">*</span>
                </label>
                {isSubmit && sponsorFormErrors.terms && (
                    <p className="text-danger f-13">{sponsorFormErrors.terms}</p>
                )}
            </div>

            <div>
                <Button type="button" color="primary" className="mt-3 register-btn" onClick={handleSponsorSubmit}>
                    Register as Sponsor
                </Button>
            </div>
        </div>
    );
};

export default SponsorForm;