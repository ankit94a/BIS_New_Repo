using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.Common.Entities;
using BIS.DB.Interfaces;
using BIS.Manager.Interfaces;
using Microsoft.EntityFrameworkCore;
using static BIS.Common.Enum.Enum;

namespace BIS.Manager.Implements
{
    public class MasterDataManager : IMasterDataManager
    {
        private IMasterDataDB _masterDataDB;
        private readonly IUserDB _userDB;
        public MasterDataManager(IMasterDataDB masterDataDB, IUserDB userDB)
        {
            _masterDataDB = masterDataDB;
            _userDB = userDB;
        }
        public List<MasterData> GetAll(int corpsId,int divisionId)
        {
            return _masterDataDB.GetAll(corpsId,divisionId);
        }
        public List<MasterData> GetAllMasterData(int corpsId, RoleType roleType, int divisionId = 0)
        {
            var masterDataList = new List<MasterData>();
            if (roleType == RoleType.SuperAdmin)
            {

            }
            else if (roleType == RoleType.Admin)
            {

            }
            else
            {

                foreach (var item in Enum.GetValues(typeof(RoleType)).Cast<RoleType>().OrderByDescending(e => (int)e))
                {
                    Console.WriteLine(item);
                    if ((int)item <= (int)roleType)
                    {
                        var userId = _userDB.GetUserIdByRoleType(item);
                        // checking that user fill any masterdata or not
                        if(userId > 0)
                        {
                            var dataList = _masterDataDB.GetByUserId(userId);
                            masterDataList.AddRange(dataList);
                        }                      
                    }
                }



            }
            return masterDataList;
        }
        public List<MasterData> GetByIds(string idsList)
        {
            // in idsList there is value "[18,55,90]" convert this string into array
            var idsArray = idsList.Trim('[', ']').Split(',')  .Select(id => int.Parse(id)).ToList();
            return _masterDataDB.GetByIds(idsArray);
        }
        public long Add(MasterData masterData)
        {
            throw new NotImplementedException();
        }
        public long Update(MasterData masterData)
        {
            throw new NotImplementedException();
        }
        public MasterData GetBy(int Id, int CorpsId)
        {
            throw new NotImplementedException();
        }

    }
}
