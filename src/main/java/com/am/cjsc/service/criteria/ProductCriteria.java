package com.am.cjsc.service.criteria;

import java.io.Serializable;
import java.util.Objects;
import tech.jhipster.service.Criteria;
import tech.jhipster.service.filter.BooleanFilter;
import tech.jhipster.service.filter.DoubleFilter;
import tech.jhipster.service.filter.Filter;
import tech.jhipster.service.filter.FloatFilter;
import tech.jhipster.service.filter.IntegerFilter;
import tech.jhipster.service.filter.LongFilter;
import tech.jhipster.service.filter.StringFilter;

/**
 * Criteria class for the {@link com.am.cjsc.domain.Product} entity. This class is used
 * in {@link com.am.cjsc.web.rest.ProductResource} to receive all the possible filtering options from
 * the Http GET request parameters.
 * For example the following could be a valid request:
 * {@code /products?id.greaterThan=5&attr1.contains=something&attr2.specified=false}
 * As Spring is unable to properly convert the types, unless specific {@link Filter} class are used, we need to use
 * fix type specific filters.
 */
public class ProductCriteria implements Serializable, Criteria {

    private static final long serialVersionUID = 1L;

    private LongFilter id;

    private StringFilter name;

    private StringFilter productCode;

    private DoubleFilter lastPrice;

    private StringFilter description;

    private LongFilter ratingsId;

    private LongFilter categoryId;

    public ProductCriteria() {}

    public ProductCriteria(ProductCriteria other) {
        this.id = other.id == null ? null : other.id.copy();
        this.name = other.name == null ? null : other.name.copy();
        this.productCode = other.productCode == null ? null : other.productCode.copy();
        this.lastPrice = other.lastPrice == null ? null : other.lastPrice.copy();
        this.description = other.description == null ? null : other.description.copy();
        this.ratingsId = other.ratingsId == null ? null : other.ratingsId.copy();
        this.categoryId = other.categoryId == null ? null : other.categoryId.copy();
    }

    @Override
    public ProductCriteria copy() {
        return new ProductCriteria(this);
    }

    public LongFilter getId() {
        return id;
    }

    public LongFilter id() {
        if (id == null) {
            id = new LongFilter();
        }
        return id;
    }

    public void setId(LongFilter id) {
        this.id = id;
    }

    public StringFilter getName() {
        return name;
    }

    public StringFilter name() {
        if (name == null) {
            name = new StringFilter();
        }
        return name;
    }

    public void setName(StringFilter name) {
        this.name = name;
    }

    public StringFilter getProductCode() {
        return productCode;
    }

    public StringFilter productCode() {
        if (productCode == null) {
            productCode = new StringFilter();
        }
        return productCode;
    }

    public void setProductCode(StringFilter productCode) {
        this.productCode = productCode;
    }

    public DoubleFilter getLastPrice() {
        return lastPrice;
    }

    public DoubleFilter lastPrice() {
        if (lastPrice == null) {
            lastPrice = new DoubleFilter();
        }
        return lastPrice;
    }

    public void setLastPrice(DoubleFilter lastPrice) {
        this.lastPrice = lastPrice;
    }

    public StringFilter getDescription() {
        return description;
    }

    public StringFilter description() {
        if (description == null) {
            description = new StringFilter();
        }
        return description;
    }

    public void setDescription(StringFilter description) {
        this.description = description;
    }

    public LongFilter getRatingsId() {
        return ratingsId;
    }

    public LongFilter ratingsId() {
        if (ratingsId == null) {
            ratingsId = new LongFilter();
        }
        return ratingsId;
    }

    public void setRatingsId(LongFilter ratingsId) {
        this.ratingsId = ratingsId;
    }

    public LongFilter getCategoryId() {
        return categoryId;
    }

    public LongFilter categoryId() {
        if (categoryId == null) {
            categoryId = new LongFilter();
        }
        return categoryId;
    }

    public void setCategoryId(LongFilter categoryId) {
        this.categoryId = categoryId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        final ProductCriteria that = (ProductCriteria) o;
        return (
            Objects.equals(id, that.id) &&
            Objects.equals(name, that.name) &&
            Objects.equals(productCode, that.productCode) &&
            Objects.equals(lastPrice, that.lastPrice) &&
            Objects.equals(description, that.description) &&
            Objects.equals(ratingsId, that.ratingsId) &&
            Objects.equals(categoryId, that.categoryId)
        );
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, productCode, lastPrice, description, ratingsId, categoryId);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "ProductCriteria{" +
            (id != null ? "id=" + id + ", " : "") +
            (name != null ? "name=" + name + ", " : "") +
            (productCode != null ? "productCode=" + productCode + ", " : "") +
            (lastPrice != null ? "lastPrice=" + lastPrice + ", " : "") +
            (description != null ? "description=" + description + ", " : "") +
            (ratingsId != null ? "ratingsId=" + ratingsId + ", " : "") +
            (categoryId != null ? "categoryId=" + categoryId + ", " : "") +
            "}";
    }
}
