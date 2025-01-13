using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.Common.Entities;
using BIS.DB.Interfaces;

namespace BIS.DB.Implements
{
    public  class RoleDB : IRoleDB, IBaseDB<Role>
    {
        private readonly AppDBContext dbContext;
        public RoleDB() { }
        public List<Role> GetAll(long corpsId,long DivisonId)
        {
            return dbContext.Roles.Where(r => r.CorpsId == corpsId && r.DivisionId == DivisonId).ToList();
        }
        public long Add(Role role)
        {
            dbContext.Roles.Add(role);
            dbContext.SaveChanges();
            return role.Id;
        }
        public long Update(Role role)
        {
            throw new NotImplementedException();
        }
        public Role GetBy(long Id, long CorpsId)
        {
            throw new NotImplementedException();
        }
    }
}
