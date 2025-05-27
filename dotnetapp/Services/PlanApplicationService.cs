private readonly ApplicationDbContext _context;

public PlanApplicationService(ApplicationDbContext context)
{
    _context = context;
}