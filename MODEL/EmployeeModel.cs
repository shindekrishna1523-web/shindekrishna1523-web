using System;
using System.Collections.Generic;

namespace MODEL
{
    public class EmployeeModel
    {
        public int ID { get; set; }
        public string? Code { get; set; }

        // Name
        public string? FirstName { get; set; }
        public string? MiddleName { get; set; }
        public string? LastName { get; set; }

        // Organisation
        public int BranchID { get; set; }
        public int DeptID { get; set; }
        public int SecID { get; set; }
        public string? ShortName { get; set; }

        // Status / Dates
        public bool IsActive { get; set; }
        public bool IsApproved { get; set; }
        public bool FileComplete { get; set; }
        public bool Trainee { get; set; }
        public DateTime? ApplicationDate { get; set; }
        public DateTime? JoinDate { get; set; }
        public DateTime? LeftDate { get; set; }
        public int BadgeNo { get; set; }

        // Personal
        public string? Gender { get; set; }
        public string? MaritalStatus { get; set; }

        // Current Address
        public string? Address1 { get; set; }
        public string? Address2 { get; set; }
        public string? Address3 { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? Country { get; set; }
        public string? ZipCode { get; set; }

        // Permanent Address
        public string? PermAddress1 { get; set; }
        public string? PermAddress2 { get; set; }
        public string? PermAddress3 { get; set; }
        public string? PermCity { get; set; }
        public string? PermState { get; set; }
        public string? PermCountry { get; set; }
        public string? PermZip { get; set; }

        // Contact & Additional
        public string? ContactNo1 { get; set; }
        public string? EmergencyNo { get; set; }
        public DateTime? BirthDate { get; set; }
        public string? BirthPlace { get; set; }
        public string? BloodGroup { get; set; }
        public string? Email { get; set; }
        public string? ReferenceBy { get; set; }

        // Bank & Govt
        public string? BankName { get; set; }
        public string? BankAccountNo { get; set; }
        public string? IFSCCode { get; set; }
        public string? PANNo { get; set; }
        public string? AadharCardNo { get; set; }
        public string? GSTNo { get; set; }

        // Job
        public string? Shift { get; set; }
        public string? PayrollType { get; set; }
        public string? JobType { get; set; }
        public string? Grade { get; set; }
        public string? PFNo { get; set; }
        public DateTime? PFDate { get; set; }

        // Photo
        public string? PhotoPath { get; set; }

        // Skills
        public List<string>? Processes { get; set; } = new();
    }
}

