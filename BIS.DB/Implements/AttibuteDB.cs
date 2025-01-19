using BIS.Common.Entities;
using BIS.DB.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BIS.DB.Implements
{
    public class AttibuteDB : IAttributeDB
    {
        private readonly AppDBContext _dbContext;
        public AttibuteDB(AppDBContext dbContext)
        {
            _dbContext = dbContext;
        }
        public List<Aspect> GetAllAspect()
        {
            return _dbContext.MasterAspects.ToList();
        }
            
        public List<Indicator> GetIndicatorByAspect(int aspectId)
        {
            return _dbContext.MasterIndicators.Where(d => d.MasterAspectID == aspectId).ToList();
        }

        public List<IndicatorSubFields> GetIndicatorSubField(int indicatorId)
        {
            return _dbContext.IndicatorSubFields.Where(d => d.IndicatorId == indicatorId).ToList();
        }
    }
}
