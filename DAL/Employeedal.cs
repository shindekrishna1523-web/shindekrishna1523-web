using Microsoft.Data.SqlClient;
using MODEL;
using System;
using System.Collections.Generic;
using System.Data;
using DAL.Data;

namespace DAL
{
    public class EmployeeDAL
    {
        private readonly DbHelper _db;

        public EmployeeDAL(DbHelper dbHelper)
        {
            _db = dbHelper;
        }

        // GET ALL
        public DataTable GetList()
        {
            return _db.ExecuteDataTable("dbo.usp_GetAllEmployees", CommandType.StoredProcedure);
        }

        // GET BY ID
        public EmployeeModel Fetch(int id)
        {
            var p = new SqlParameter("@EmployeeId", SqlDbType.Int) { Value = id };
            var row = _db.ExecuteDataRow("dbo.usp_GetEmployeeById", CommandType.StoredProcedure, p);

            if (row == null) return null;

            return new EmployeeModel
            {
                ID = row["EmployeeId"] == DBNull.Value ? 0 : Convert.ToInt32(row["EmployeeId"]),
                BranchID = row["BranchId"] == DBNull.Value ? 0 : Convert.ToInt32(row["BranchId"]),
                FirstName = row["FirstName"].ToString(),
                MiddleName = row["MiddleName"].ToString(),
                LastName = row["Surname"].ToString(),
                DeptID = row["DepartmentId"] == DBNull.Value ? 0 : Convert.ToInt32(row["DepartmentId"]),
                SecID = row["SectionId"] == DBNull.Value ? 0 : Convert.ToInt32(row["SectionId"]),
                ApplicationDate = row["ApplicationDate"] == DBNull.Value ? null : Convert.ToDateTime(row["ApplicationDate"]),
                JoinDate = row["JoiningDate"] == DBNull.Value ? null : Convert.ToDateTime(row["JoiningDate"]),
                LeftDate = row["LeftDate"] == DBNull.Value ? null : Convert.ToDateTime(row["LeftDate"]),
                Code = row["EmployeeCode"].ToString(),
                BadgeNo = row["BadgeNo"] == DBNull.Value ? 0 : Convert.ToInt32(row["BadgeNo"]),
                Gender = row["Gender"].ToString(),
                MaritalStatus = row["MaritalStatus"].ToString(),
                Address1 = row["CurrentAddress"].ToString(),
                City = row["CurrentCity"].ToString(),
                State = row["CurrentState"].ToString(),
                Country = row["CurrentCountry"].ToString(),
                ZipCode = row["CurrentZip"].ToString(),
                ContactNo1 = row["MobileNo"].ToString(),
                Email = row["EmailId"].ToString()
            };
        }

        public int Insert(EmployeeModel e)
        {
            var parameters = new List<SqlParameter>
    {
         new("@BranchId", e.BranchID),
    new("@FirstName", e.FirstName),
    new("@MiddleName", (object?)e.MiddleName ?? DBNull.Value),
    new("@Surname", (object?)e.LastName ?? DBNull.Value),
    
    new("@DepartmentId", e.DeptID),
    new("@SectionId", e.SecID),
    new("@ShortName", (object?)e.ShortName ?? DBNull.Value),

    new("@ApplicationDate", (object?)e.ApplicationDate ?? DBNull.Value),
    new("@JoiningDate", (object?)e.JoinDate ?? DBNull.Value),
    new("@LeftDate", (object?)e.LeftDate ?? DBNull.Value),

    new("@EmployeeCode", (object?)e.Code ?? DBNull.Value),
    new("@BadgeNo", e.BadgeNo),

    new("@Gender", (object?)e.Gender ?? DBNull.Value),
    new("@MaritalStatus", (object?)e.MaritalStatus ?? DBNull.Value),

    // Current address (Address1 only mapped in DB)
    new("@CurrentAddress", (object?)e.Address1 ?? DBNull.Value),
    new("@CurrentCity", (object?)e.City ?? DBNull.Value),
    new("@CurrentState", (object?)e.State ?? DBNull.Value),
    new("@CurrentCountry", (object?)e.Country ?? DBNull.Value),
    new("@CurrentZip", (object?)e.ZipCode ?? DBNull.Value),

    // Permanent address (only Address1 supported in SP)
    new("@PermanentAddress", (object?)e.PermAddress1 ?? DBNull.Value),
    new("@PermanentCity", (object?)e.PermCity ?? DBNull.Value),
    new("@PermanentState", (object?)e.PermState ?? DBNull.Value),
    new("@PermanentCountry", (object?)e.PermCountry ?? DBNull.Value),
    new("@PermanentZip", (object?)e.PermZip ?? DBNull.Value),

    // Contact & personal
    new("@MobileNo", (object?)e.ContactNo1 ?? DBNull.Value),
    new("@EmergencyNo", (object?)e.EmergencyNo ?? DBNull.Value),
    new("@BirthDate", (object?)e.BirthDate ?? DBNull.Value),
    new("@BirthPlace", (object?)e.BirthPlace ?? DBNull.Value),
    new("@BloodGroup", (object?)e.BloodGroup ?? DBNull.Value),
    new("@EmailId", (object?)e.Email ?? DBNull.Value),
    new("@ReferenceBy", (object?)e.ReferenceBy ?? DBNull.Value),

    // Bank & Govt IDs
    new("@BankName", (object?)e.BankName ?? DBNull.Value),
    new("@BankAccountNo", (object?)e.BankAccountNo ?? DBNull.Value),
    new("@IFSCCode", (object?)e.IFSCCode ?? DBNull.Value),
    new("@PANNo", (object?)e.PANNo ?? DBNull.Value),
    new("@AadharCardNo", (object?)e.AadharCardNo ?? DBNull.Value),
    new("@GSTNo", (object?)e.GSTNo ?? DBNull.Value),

    // Job details
    new("@Shift", (object?)e.Shift ?? DBNull.Value),
    new("@PayrollType", (object?)e.PayrollType ?? DBNull.Value),
    new("@JobType", (object?)e.JobType ?? DBNull.Value),
    new("@Grade", (object?)e.Grade ?? DBNull.Value),
    new("@PFNo", (object?)e.PFNo ?? DBNull.Value),
    new("@PFDate", (object?)e.PFDate ?? DBNull.Value),

    // Photo
    new("@PhotoPath", (object?)e.PhotoPath ?? DBNull.Value),

    // Flags
    new("@Approved", e.IsApproved),
    new("@Active", e.IsActive),
    new("@FileComplete", e.FileComplete),
    new("@Trainee", e.Trainee)
    };

            // 🔥 THIS IS THE CORRECT WAY
            object obj = _db.ExecuteScalar("dbo.usp_InsertEmployee", CommandType.StoredProcedure, parameters.ToArray());
            return Convert.ToInt32(obj);
        }

        // UPDATE
        public void Update(EmployeeModel e)
        {
            var parameters = new List<SqlParameter>
            {
                new("@EmployeeId", e.ID),
                new("@BranchId", e.BranchID),
                new("@FirstName", e.FirstName),
                new("@MiddleName", e.MiddleName),
                new("@Surname", e.LastName),
                new("@DepartmentId", e.DeptID),
                new("@SectionId", e.SecID),
                new("@ShortName", DBNull.Value),
                new("@ApplicationDate", e.ApplicationDate ?? (object)DBNull.Value),
                new("@JoiningDate", e.JoinDate ?? (object)DBNull.Value),
                new("@LeftDate", e.LeftDate ?? (object)DBNull.Value),
                new("@EmployeeCode", e.Code),
                new("@BadgeNo", e.BadgeNo),
                new("@Gender", e.Gender),
                new("@MaritalStatus", e.MaritalStatus),
                new("@CurrentAddress", e.Address1),
                new("@CurrentCity", e.City),
                new("@CurrentState", e.State),
                new("@CurrentCountry", e.Country),
                new("@CurrentZip", e.ZipCode),
                new("@PermanentAddress", DBNull.Value),
                new("@PermanentCity", DBNull.Value),
                new("@PermanentState", DBNull.Value),
                new("@PermanentCountry", DBNull.Value),
                new("@PermanentZip", DBNull.Value),
                new("@MobileNo", e.ContactNo1),
                new("@EmergencyNo", DBNull.Value),
                new("@BirthDate", DBNull.Value),
                new("@BirthPlace", DBNull.Value),
                new("@BloodGroup", DBNull.Value),
                new("@EmailId", e.Email),
                new("@BankName", DBNull.Value),
                new("@BankAccountNo", DBNull.Value),
                new("@IFSCCode", DBNull.Value),
                new("@PANNo", DBNull.Value),
                new("@AadharCardNo", DBNull.Value),
                new("@GSTNo", DBNull.Value),
                new("@Shift", DBNull.Value),
                new("@PayrollType", DBNull.Value),
                new("@JobType", DBNull.Value),
                new("@Grade", DBNull.Value),
                new("@PFNo", DBNull.Value),
                new("@PhotoPath", DBNull.Value),
                new("@Approved", e.IsApproved),
                new("@Active", e.IsActive),
                new("@FileComplete", false),
                new("@Trainee", false)
            };

            _db.ExecuteNonQuery("dbo.usp_UpdateEmployee", CommandType.StoredProcedure, parameters.ToArray());
        }

        // DELETE
        public void Delete(int id)
        {
            var p1 = new SqlParameter("@EmployeeId", id);
            _db.ExecuteNonQuery("dbo.usp_DeleteEmployee", CommandType.StoredProcedure, p1);
        }
    }
}
