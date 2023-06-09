<template>
    <div class="billing-history">
        <div class="filter-btn-container">
            <button type="button" class="btn btn-primary"><i class="fa fa-bar-chart" aria-hidden="true"></i>
                View All</button>
            <button type="button" class="btn btn-primary">June</button>
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Transactional ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Hours</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Receipt</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">ID: 00023219</th>
                    <td>
                        <span class="date">5/26/23</span><br>
                        <small id="helpId" class="form-text text-muted">At 1:00pm</small>
                    </td>
                    <td class="hours">+20 hrs</td>
                    <td class="amount">-$100.00</td>
                    <td>
                        <a href="#">View/Download</a>
                    </td>
                </tr>
                <tr>
                    <th scope="row">ID: 00023218</th>
                    <td>
                        <span class="date">5/26/23</span><br>
                        <small id="helpId" class="form-text text-muted">At 1:00pm</small>
                    </td>
                    <td class="hours">+15 hrs</td>
                    <td class="amount">-$75.00</td>
                    <td>
                        <a href="#">View/Download</a>
                    </td>
                </tr>
                <tr>
                    <th scope="row">ID: 00023217</th>
                    <td>
                        <span class="date">5/26/23</span><br>
                        <small id="helpId" class="form-text text-muted">At 1:00pm</small>
                    </td>
                    <td class="hours">-$50.00</td>
                    <td class="amount">-$50.00</td>
                    <td>
                        <a href="#">View/Download</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
.billing-history {
    width: 100%;
    padding-top: 1.5rem;

    >h5 {
        font-size: 17px;
    }

    .btn-primary {
        --bs-btn-color: #344054;
        --bs-btn-bg: #FFFFFF;
        --bs-btn-border-color: #FFFFFF;
        --bs-btn-hover-color: #053CD3;
        --bs-btn-hover-bg: #F5F8FF;
        --bs-btn-hover-border-color: #F5F8FF;
        font-weight: 500;
    }

    .table {
        opacity: .9;
        --bs-table-hover-bg: #E9F3FB;

        >tbody {
            background-color: #F9FAFB;
        }

        .date,
        .hours,
        .amount {
            font-weight: 600;
        }
    }
}
</style>