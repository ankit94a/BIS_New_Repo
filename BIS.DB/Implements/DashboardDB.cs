using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.Common.Entities;
using BIS.DB.Interfaces;
using static BIS.Common.Enum.Enum;

namespace BIS.DB.Implements
{
    public class DashboardDB : IDashboardDB
    {
        private readonly AppDBContext _dbContext;
        public DashboardDB(AppDBContext dbContext)
        {
            _dbContext = dbContext;
        }
        public List<DashboardChart> GetFmnWiseData(long corpsId, long divisionId, RoleType roleType)
        {
            return new List<DashboardChart>();
        }
    }
}
