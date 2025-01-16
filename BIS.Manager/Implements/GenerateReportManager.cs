using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.Common.Entities;
using BIS.DB.Interfaces;
using BIS.Manager.Interfaces;

namespace BIS.Manager.Implements
{
    public class GenerateReportManager : IGenerateReportManager
    {
        private readonly IGenerateReportDB _generateReportDB;
        public GenerateReportManager(IGenerateReportDB generateReportDB)
        {
            _generateReportDB = generateReportDB;
        }
        public List<GenerateReport> GetReportByUser(long corpsId, long divisionId, int userId)
        {
            return _generateReportDB.GetReportByUser(corpsId, divisionId, userId);
        }
        public List<GenerateReport> GetAll(int corpsId, int divisonId)
        {
            return _generateReportDB.GetAll(corpsId, divisonId);
        }
        public long Add(GenerateReport report)
        {
            throw new NotImplementedException();
        }
        public long Update(GenerateReport report)
        {
            throw new NotImplementedException();
        }
        public GenerateReport GetBy(int Id, int CorpsId)
        {
            throw new NotImplementedException();
        }
    }
}
