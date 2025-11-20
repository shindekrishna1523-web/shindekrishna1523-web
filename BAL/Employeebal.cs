using System.Data;
using DAL;
using MODEL;

namespace BAL
{
    public class EmployeeBAL
    {
        private readonly EmployeeDAL _dal;

        public EmployeeBAL(EmployeeDAL dal)
        {
            _dal = dal;
        }

        public DataTable GetList()
        {
            return _dal.GetList();
        }

        public EmployeeModel Fetch(int id)
        {
            return _dal.Fetch(id);
        }

        public int Insert(EmployeeModel model)
        {
            return _dal.Insert(model);
        }

        public void Update(EmployeeModel model)
        {
            _dal.Update(model);
        }

        public void Delete(int id)
        {
            _dal.Delete(id);
        }

        // Auto Employee Code
        public string GenerateEmployeeCode(int currentId)
        {
            return "EMP" + currentId.ToString("0000");
        }
    }
}
