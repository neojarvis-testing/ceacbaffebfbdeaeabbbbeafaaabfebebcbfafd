[ApiController]
[Route("api/[controller]")]
public class InquiryController: ControllerBase
{
    private readonly InquiryService _inquiryService;
    public InquiryController(InquiryService _inquiryService)
    {
        _inquiryService = inquiryService;
    }
}