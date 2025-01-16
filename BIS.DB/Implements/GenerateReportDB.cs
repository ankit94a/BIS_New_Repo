using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.Common.Entities;
using BIS.DB.Interfaces;

namespace BIS.DB.Implements
{
    public class GenerateReportDB : IGenerateReportDB, IBaseDB<GenerateReport>
    {
        private readonly AppDBContext _dbContext;
        public GenerateReportDB(AppDBContext dbContext)
        {
            _dbContext = dbContext;
        }
        public List<GenerateReport> GetReportByUser(long corpsId, long divisionId, int userId)
        {
            var result = _dbContext.GenerateReports.Where(report => report.CreatedBy == userId).ToList();
            return result;
        }
        public List<GenerateReport> GetAll(long corpsId, long divisionId)
        {
            return _dbContext.GenerateReports.Where(r => r.CorpsId == corpsId && r.DivisionId == divisionId).ToList();
        }
        public long Add(GenerateReport report)
        {
            _dbContext.GenerateReports.Add(report);
            _dbContext.SaveChanges();
            return report.Id;
        }
        public long Update(GenerateReport report)
        {
            throw new NotImplementedException();
        }
        public GenerateReport GetBy(long Id, long CorpsId)
        {
            throw new NotImplementedException();
        }
    }
}
