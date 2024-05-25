export const glossary = `Glossary:
The following detail will provide context for the control in question in addition to the description you will be provided:
- Control Name: naming convention to uniquely identify a control.
- General Process Category: a broad business operation the control fits into. Examples include Order to Cash, Process to Pay, Financial Statement Close Process, and many more.
- Control objective: a one sentence description of what the control aims to achieve as a result of operation.
- Control operator: used to describe who or what performs the control. In a manual control, the control operator is the individual who performs the control. In an automated control, the control operator is the IT system.
- Control description: a summary of activity occurring by the control operator to achieve the control objective.
- Nature of the control: Whether a control is performed by an operator without the use of technology (Manual Control), by a system automatically (application control), or with a combination of an operator and system functionality (information technology dependent manual control (ITDM)
- Manual Control: Involve processes conducted by individuals outside of a system. Examples include supervisor reviews, bank reconciliations, and manual matching of cash transactions. These controls are crucial, but their effectiveness depends on consistent human operation, requiring clear ownership within the organization.
- IT dependent Manual (ITDM) control: A control that is manually performed by individuals, but rely on computer generated information. Typically, a report is extracted from a system, which is then modified/manipulated by the control operator to arrive at the desired control objective. A control of this nature should include evidence retained by the operator that the automated report extracted from the respective system was run with the correct parameters (evidenced via retained screenshot of parameters from the system) and is complete (typically evidenced by retaining a screenshot from the system of the number of rows from the report and comparing to the retained export).
- Frequency: how often the control is performed.
- Judgement/Complexity involved: Whether a control operator requires subjectivity to determine if something is an outlier and/or whether that outlier is correct/reasonable in operating the manual portion of a control activity. The control operator should retain rationale in the support that can be inspected by a third party (e.g. auditor) providing sufficient evidence that the conclusion reached is appropriately supported. Initials of the control operator also help provide inspection level evidence of review.
- Quantitative thresholds: a level of precision required for investigation or used to identify outliers that have a specific numeric value. For items greater than the designated threshold, the control operator should retain rationale in the support that can be inspected by a third party (e.g. auditor) providing sufficient evidence that items outside of expectations are sufficiently supported via rationale. Initials of the control operator also help provide inspection level evidence of review.
- Qualitative thresholds: a level of precision required for investigation or used to identify outliers that is not numeric in nature. For items greater than the designated threshold, the control operator should retain rationale in the support that can be inspected by a third party (e.g. auditor) providing sufficient evidence that items outside of expectations are sufficiently supported via rationale. Initials of the control operator also help provide inspection level evidence of review.
- Investigation and resolution: documented steps performed by the control operator to investigate and resolve outliers identified in operation of a control activity.
- Information used in the performance of the control (IPC): the information used when performing the manual process of the control activity like system reports, manually prepared spreadsheets, and queries including retained report parameters as applicable. This is only applicable for ITDM controls as a system is required to generate detail that an operator then modifies.
- Control design: To effectively design a control to achieve the control objective(s), the control should include specific attributes directly responsive to the objective(s). These attributes should be clearly documented as part of the control’s design documentation. All controls have at least one control attribute.
- Control attributes: Control attributes are the specific procedures performed by the control operator that make up the control. Control attributes are the parts of the control that address its objective. Each piece of information used in the performance of the control will have its own attribute, and the following attributes would be how the control operator uses that information to achieve the objective of the control. Not all parts of a control are considered control attributes. For example, if the control operator reconciling A to B is important to achieving the control objective, then that step is a control attribute. If, on the other hand, saving the completed reconciliation to a particular file folder is not important to achieving the control objective, then that step is not a control attribute. Control attributes need to be sufficiently detailed for the control operator to understand what is expected of them in executing the control and for a third party (e.g. external auditor) to be able to re-perform the control attributes or inspect evidence of review as necessary (e.g. the control operator leaves notes, questions, initials within excel as evidence of review). ‘Sufficiently detailed’ means the control attributes are described in specific terms that align with the actual procedures or steps in the control that the control operator performs. What is expected of the control operator should be clearly described in the control attribute. Vague language should be avoided. For example, words like ‘reasonable’ or ‘appropriate’ do not provide a sufficient level of detail, nor does simply indicating that the control operator performs a ‘review.’ Instead, control attributes should articulate how the control operator judges whether something is ‘reasonable’ or ‘appropriate’ or what specific conditions the control operator contemplates or evaluates when performing a ‘review.’
- Practical tips when writing control attributes: When documenting the design of controls that require a control operator to review something and make an evaluation, avoid using the term ‘review’ in describing the control. This will help identify the specific steps or attributes the control operator is expected to perform in executing the control. In addition, when considering whether a control attribute is sufficiently detailed, management may want to ask themselves the following question: “If another person needed to perform this control in the absence of the current control operator, would they know exactly what to do, what criteria/thresholds to apply to identify items that may require further investigation, and how to resolve such items in order to achieve the control’s objective?”`;