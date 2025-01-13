using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.DB;
using BIS.Common.Entities;
using BIS.DB.Interfaces;

namespace BIS.DB.Implements
{
    public class MasterDataDB : IMasterDataDB, IBaseDB<MasterData>
    {
        private readonly AppDBContext _dbContext;
        public MasterDataDB(AppDBContext dbContext) 
        {
            _dbContext = dbContext;
        }
        public List<MasterData> GetAll(long corpsId,long DivisonId)
        {
            return  _dbContext.MasterDatas.Where(m => m.ID == corpsId && m.DivisionId == DivisonId).ToList();
        }
        public List<MasterData> GetAllMasterData()
        {
            return _dbContext.MasterDatas.ToList();
        }
        public long Add(MasterData masterData)
        {
            _dbContext.MasterDatas.Add(masterData);
            _dbContext.SaveChanges();
            return masterData.ID;
        }
        public long Update(MasterData masterData)
        {
            throw new NotImplementedException();
        }
        public MasterData GetBy(long Id, long CorpsId)
        {
            throw new NotImplementedException();
        }
    }
}
