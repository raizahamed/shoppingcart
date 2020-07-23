package repository;

import model.OrderProductPK;
import org.springframework.data.repository.CrudRepository;

public interface OrderProductRepo extends CrudRepository<OrderProductRepo, OrderProductPK> {
    double getTotalPrice();
}
