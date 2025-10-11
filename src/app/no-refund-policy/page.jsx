import React from "react";

const NoRefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 p-8 bg-white shadow-sm rounded-2xl text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
        No Refund Policy
      </h1>

      <p className="mb-4">
        At <strong>IntegrateGo</strong>, all payments made towards our courses and programs are 
        <strong> non-refundable</strong>. By enrolling in our programs, learners acknowledge and accept 
        this policy. This approach ensures mutual commitment and upholds the integrity of the learning 
        environment for all participants.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        Preview Before You Enroll
      </h2>

      <p className="mb-4">
        To help you make an informed decision, we strongly encourage prospective students to:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Attend our free orientation or demo sessions (where available)</li>
        <li>Review the detailed curriculum and course structure thoroughly</li>
        <li>Reach out to our support team for any questions or clarifications</li>
      </ul>

      <p className="mb-4">
        These steps are designed to ensure that the program aligns with your learning goals 
        and expectations prior to making a financial commitment.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        Refund Exceptions (If Applicable)
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-2">1. Duplicate Payment</h3>
      <p className="mb-2">
        If a duplicate payment is made due to a technical or transactional error:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>A formal request must be submitted within 7 days of the transaction</li>
        <li>Proof of payment must be provided</li>
        <li>Upon verification, the excess amount will be refunded within 5–7 business days</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">2. Course Cancellation by IntegrateGo</h3>
      <p className="mb-2">
        In the rare event that a course is cancelled by IntegrateGo due to unforeseen circumstances:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>A full refund will be issued to enrolled students</li>
        <li>
          Alternatively, students may opt to shift to the next available batch or a different course,
          based on eligibility and availability
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        Non-Refundable Scenarios
      </h2>

      <p className="mb-4">Refunds will not be issued in the following situations:</p>

      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Change of mind after payment</li>
        <li>Discontinued or incomplete course participation</li>
        <li>Dissatisfaction after accessing part of the course</li>
        <li>Personal issues (e.g., job changes, exams, travel, family obligations, etc.)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        Refund Processing Timeline
      </h2>

      <p className="mb-6">
        For cases that meet our exception criteria, approved refunds will be processed to the original
        payment method within <strong>7–10 business days</strong> after successful verification.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        Contact for Refund Assistance
      </h2>

      <p className="mb-4">
        If you believe you qualify for a refund under the exceptions outlined above, please contact our 
        support team:
      </p>

      <ul className="list-none mb-4 space-y-2">
        <li>📧 <strong>Email:</strong> battula@Integratego.com / integratego@gmail.com</li>
        <li>📞 <strong>Phone:</strong> +91-9705 558 559</li>
        <li>🕒 <strong>Support Hours:</strong> Monday to Friday, 10:00 AM – 7:00 PM IST</li>
      </ul>

      <p className="text-sm text-gray-600 mt-8">
        By making a payment to IntegrateGo, you acknowledge that you have read, understood, 
        and agreed to this No Refund Policy.
      </p>
    </div>
  );
};

export default NoRefundPolicy;
