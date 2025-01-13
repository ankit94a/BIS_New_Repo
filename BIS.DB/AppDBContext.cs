using BIS.Common.Entities;
using Microsoft.EntityFrameworkCore;

namespace BIS.DB

{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Corps> Corps { get; set; }
        public DbSet<Divisons> Divisons { get; set; }
        public DbSet<MasterData> MasterDatas { get; set; }
        public DbSet<UserDetail> UserDetails { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Menus> UserMenus { get; set; }
        public DbSet<GenerateReport> GenerateReports { get; set; }
    }
}
