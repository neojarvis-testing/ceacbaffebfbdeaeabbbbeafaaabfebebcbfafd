using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {}

public DbSet<User> Users {get; set;}
public DbSet<SavingsPlan> SavingsPlans {get; set;}
public DbSet<PlanApplication> PlanApplications {get; set;}
public DbSet<Inquiry> Inquiries {get; set;}
public DbSet<Notification> Notifications {get; set;}