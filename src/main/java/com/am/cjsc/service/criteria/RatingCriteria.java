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
 * Criteria class for the {@link com.am.cjsc.domain.Rating} entity. This class is used
 * in {@link com.am.cjsc.web.rest.RatingResource} to receive all the possible filtering options from
 * the Http GET request parameters.
 * For example the following could be a valid request:
 * {@code /ratings?id.greaterThan=5&attr1.contains=something&attr2.specified=false}
 * As Spring is unable to properly convert the types, unless specific {@link Filter} class are used, we need to use
 * fix type specific filters.
 */
public class RatingCriteria implements Serializable, Criteria {

    private static final long serialVersionUID = 1L;

    private LongFilter id;

    private IntegerFilter rating;

    private StringFilter description;

    private LongFilter productId;

    public RatingCriteria() {}

    public RatingCriteria(RatingCriteria other) {
        this.id = other.id == null ? null : other.id.copy();
        this.rating = other.rating == null ? null : other.rating.copy();
        this.description = other.description == null ? null : other.description.copy();
        this.productId = other.productId == null ? null : other.productId.copy();
    }

    @Override
    public RatingCriteria copy() {
        return new RatingCriteria(this);
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

    public IntegerFilter getRating() {
        return rating;
    }

    public IntegerFilter rating() {
        if (rating == null) {
            rating = new IntegerFilter();
        }
        return rating;
    }

    public void setRating(IntegerFilter rating) {
        this.rating = rating;
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

    public LongFilter getProductId() {
        return productId;
    }

    public LongFilter productId() {
        if (productId == null) {
            productId = new LongFilter();
        }
        return productId;
    }

    public void setProductId(LongFilter productId) {
        this.productId = productId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        final RatingCriteria that = (RatingCriteria) o;
        return (
            Objects.equals(id, that.id) &&
            Objects.equals(rating, that.rating) &&
            Objects.equals(description, that.description) &&
            Objects.equals(productId, that.productId)
        );
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, rating, description, productId);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "RatingCriteria{" +
            (id != null ? "id=" + id + ", " : "") +
            (rating != null ? "rating=" + rating + ", " : "") +
            (description != null ? "description=" + description + ", " : "") +
            (productId != null ? "productId=" + productId + ", " : "") +
            "}";
    }
}
