using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.DB.Interfaces;

namespace BIS.DB.Implements
{
    public class DashboardDB : IDashboardDB
    {
        private readonly AppDBContext _dbContext;
        public DashboardDB(AppDBContext dbContext)
        {
            _dbContext = dbContext;
        }
    }
}
