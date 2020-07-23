package Service;

import model.OrderProduct;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import repository.OrderProductRepo;

@Service
@Transactional
public class OrderProductServiceImpl implements OrderProductService {

    private OrderProductRepo orderProductRepo;

    public OrderProductServiceImpl(OrderProductRepo orderProductRepository) {
        this.orderProductRepo = orderProductRepo;
    }

    @Override
    public OrderProduct create(OrderProduct orderProduct) {
        return this.orderProductRepo.save(OrderProduct);
    }
}
