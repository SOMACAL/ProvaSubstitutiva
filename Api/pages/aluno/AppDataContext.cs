using Microsoft.EntityFrameworkCore;
using PROVASUBSTITUTIVA.pages;

namespace ProjetoLivraria.Models
{
    public class AppDataContext : DbContext
    {
        public DbSet<cadastrar> cadastrar { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=Livraria.db");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<cadastrar>().ToTable("cadastrar");
 
        }
    }
}