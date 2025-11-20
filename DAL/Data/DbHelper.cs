using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Data
{
    public class DbHelper
    {
        private readonly string _connString;
        public DbHelper(IConfiguration configuration)
        {
            _connString = configuration.GetConnectionString("DefaultConnection");
        }

        public DataTable ExecuteDataTable(string commandText, CommandType cmdType, params SqlParameter[] parameters)
        {
            var dt = new DataTable();
            using (var con = new SqlConnection(_connString))
            using (var cmd = new SqlCommand(commandText, con) { CommandType = cmdType })
            {
                if (parameters != null) cmd.Parameters.AddRange(parameters);
                using (var da = new SqlDataAdapter(cmd))
                {
                    da.Fill(dt);
                }
            }
            return dt;
        }

        public object ExecuteScalar(string commandText, CommandType cmdType, params SqlParameter[] parameters)
        {
            using (var con = new SqlConnection(_connString))
            using (var cmd = new SqlCommand(commandText, con) { CommandType = cmdType })
            {
                if (parameters != null) cmd.Parameters.AddRange(parameters);
                con.Open();
                return cmd.ExecuteScalar();
            }
        }

        public int ExecuteNonQuery(string commandText, CommandType cmdType, params SqlParameter[] parameters)
        {
            using (var con = new SqlConnection(_connString))
            using (var cmd = new SqlCommand(commandText, con) { CommandType = cmdType })
            {
                if (parameters != null) cmd.Parameters.AddRange(parameters);
                con.Open();
                return cmd.ExecuteNonQuery();
            }
        }

        public DataRow ExecuteDataRow(string commandText, CommandType cmdType, params SqlParameter[] parameters)
        {
            var dt = ExecuteDataTable(commandText, cmdType, parameters);
            if (dt.Rows.Count > 0) return dt.Rows[0];
            return null;
        }
    }
}
