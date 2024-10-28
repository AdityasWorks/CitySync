// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {


    struct Project {
        uint projectId;
        string projectName;
        string projectDescription;
        string areaOfProject;
        uint256 deadline; 
        uint256 budgetAllocation;
        string resourcesRequired;
        string complianceAndResource;
        bool consent;
    }

    mapping(uint => User) public users;
    mapping(uint => Project) public projects;

    uint public userCount;
    uint public projectCount;

    event ProjectAdded(
        uint projectId,
        string projectName,
        string projectDescription,
        string areaOfProject,
        uint256 deadline, 
        uint256 budgetAllocation,
        string resourcesRequired,
        string complianceAndResource,
        bool consent
    );


    function addProject(
        string memory _projectName,
        string memory _projectDescription,
        string memory _areaOfProject,
        uint256 _deadline, 
        uint256 _budgetAllocation,
        string memory _resourcesRequired,
        string memory _complianceAndResource,
        bool _consent
    ) public {
        projectCount++;
        projects[projectCount] = Project(
            projectCount,
            _projectName,
            _projectDescription,
            _areaOfProject,
            _deadline, 
            _budgetAllocation,
            _resourcesRequired,
            _complianceAndResource,
            _consent
        );

        emit ProjectAdded(
            projectCount,
            _projectName,
            _projectDescription,
            _areaOfProject,
            _deadline, 
            _budgetAllocation,
            _resourcesRequired,
            _complianceAndResource,
            _consent
        );
    }

    function getProject(uint _projectId) public view returns (
        uint,
        string memory,
        string memory,
        string memory,
        uint256, 
        uint256,
        string memory,
        string memory,
        bool
    ) {
        Project memory project = projects[_projectId];
        return (
            project.projectId,
            project.projectName,
            project.projectDescription,
            project.areaOfProject,
            project.deadline, 
            project.budgetAllocation,
            project.resourcesRequired,
            project.complianceAndResource,
            project.consent
        );
    }
}