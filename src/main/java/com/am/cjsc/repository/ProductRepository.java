package com.am.cjsc.repository;

import com.am.cjsc.domain.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Product entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {
    Page<Product> findByCategory_TitleContainingIgnoreCaseOrNameContainingIgnoreCaseOrProductCodeContainingIgnoreCaseOrDescriptionContainingIgnoreCaseOrLastPrice(
        String ctitle,
        String pname,
        String pcode,
        String desc,
        Double pprice,
        Pageable page
    );
}
