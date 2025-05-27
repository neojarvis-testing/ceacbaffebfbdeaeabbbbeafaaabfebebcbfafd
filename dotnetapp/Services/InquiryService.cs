private readonly ApplicationDbContext _context;
public InquiryService(ApplicationDbContext context)
{
    _context = context;
}