[ApiController]
[Route("api/[controller]")]
public class PlanApplicationController: ControllerBase
{
    private readonly PlanApplicationService _planApplicationService;
    public PlanApplicationController(PlanApplicationService planApplicationService)
    {
        _planApplicationService = planApplicationService;
    }
}