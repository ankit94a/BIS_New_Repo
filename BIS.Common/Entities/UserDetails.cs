using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BIS.Common.Entities
{
    public class UserDetail : BaseEntity
    {
        public string Username { get; set; }
        public string Name { get; set; } = null!;

        public string Email { get; set; }

        public string Phone { get; set; }

        public string Password { get; set; }

        public int RoleId { get; set; }
        public int UserRoleId { get; set; }
       
        public bool Islocked { get; set; }
        public int Failattempt { get; set; }
        public string RoleType { get; set; }
    }
}
